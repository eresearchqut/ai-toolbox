import {
    Config,
    configComplete,
    ConfigGroup,
    DEFAULT_CONFIG,
    getCpuCores,
    getCpuModel,
    getCpuVendor,
    getGpuModel,
    getGpuModules,
    getGpuVendor,
    getJobProfile,
    getRam,
    isLyra,
    isValidChoice
} from "../Config";
import {Heading} from "@chakra-ui/react";
import React, {useState} from "react";
import QUTLogo from "../../../../../static/img/qut.png";
import {Guide, GuideHeader} from "../Guide";
import {EresearchInstructions} from "./EresearchInstructions";

const getConfigGroups = (config, onConfigChange = () => {
}) => {
    const onChange = (key) => (value) => onConfigChange({...config, [key]: value});

    return {
        "service": () => {
            const services = [
                ["Lyra", "QUT's HPC cluster"],
                ["JupyterHub", "Jupyter notebooks on QUT's HPC cluster"],
                ["rVDI", "QUT's Research Virtual Desktop Infrastructure"],
            ];
            return {
                element: (key, selected) => <ConfigGroup
                    key={key}
                    title="Service"
                    description="The service to use for running the job."
                    type="picker"
                    selected={selected}
                    inputProps={{
                        choices: services,
                        value: config?.service,
                        onChange: onChange("service"),
                    }}
                />,
                show: (config) => true,
                selected: (config) => isValidChoice(services, config?.service),
            }
        },
        "jobType": () => {
            const jobTypes = [
                ["Interactive", "Run the job in an interactive shell"],
                ["Batch", "Submit the job to the queue to run in the background"],
            ];
            return {
                element: (key, selected) => <ConfigGroup
                    key={key}
                    title="Job Type"
                    description="The type of PBS job to run."
                    type="picker"
                    selected={selected}
                    inputProps={{
                        choices: jobTypes,
                        value: config?.jobType,
                        onChange: onChange("jobType"),
                    }}
                />,
                show: (config) => config?.service === "Lyra",
                selected: (config) => isValidChoice(jobTypes, config?.jobType),
            }
        },
        "nodes": () => {
            return {
                element: (key, selected) => <ConfigGroup
                    key={key}
                    title="Nodes"
                    description="The number of nodes to use for the job."
                    type="slider"
                    selected={selected}
                    inputProps={{
                        value: config?.nodes,
                        min: 1,
                        max: 100,
                        step: 1,
                        onChange: onChange("nodes"),
                    }}
                />,
                show: (config) => config?.service === "Lyra" && config?.jobType === "Batch",
                selected: (config) => config?.nodes > 0,
            }
        },
        "hardware": () => {
            let hardware;
            if (isLyra(config)) {
                hardware = [
                    ["CPU", "Un-accelerated. Quick to queue, slow to run."],
                    ["GPU", "Accelerated GPU"],
                    ["IPU", "Accelerated IPU from Graphcore"]
                ];
            } else {
                hardware = [
                    ["CPU", "Un-accelerated. Quick to queue, slow to run."],
                    ["GPU", "Accelerated GPU"],
                ];
            }
            return {
                element: (key, selected) => <ConfigGroup
                    key={key}
                    title="Hardware"
                    description="The hardware to use for running the job."
                    type="picker"
                    selected={selected}
                    inputProps={{
                        choices: hardware,
                        value: config?.hardware,
                        onChange: onChange("hardware"),
                    }}
                />,
                show: (config) => config?.service,
                selected: (config) => isValidChoice(hardware, config?.hardware),
            }
        },
        "cpuVendor": getCpuVendor(config, onChange),
        "cpuModel": getCpuModel(config, onChange),
        "cpuCores": getCpuCores(config, onChange),
        "ram": getRam(config, onChange),
        "gpuVendor": getGpuVendor(config, onChange),
        "gpuModel": getGpuModel(config, onChange),
        "gpuModules": getGpuModules(config, onChange),
        "jobProfile": getJobProfile(config, onChange),
    }
}

export default function EresearchJob({showHeader = true}) {
    const [config, setConfig] = useState(DEFAULT_CONFIG);

    const isConfigComplete = configComplete(config, getConfigGroups)

    const header = showHeader ? <GuideHeader
        title="eResearch Job"
        subtitle="Use the form below to configure a workload that runs on the eResearch infrastructure at QUT."
        logo={QUTLogo}
        alt="QUT logo"
        link="https://www.qut.edu.au/research/eresearch"
    /> : null;

    const body = <>
        <Heading as="h2" size="md" my={2}>
            Configuration
        </Heading>
        <Config
            config={config}
            onConfigChange={setConfig}
            getConfigGroups={getConfigGroups}
        />
        {
            isConfigComplete && (
                <>
                    <Heading as="h2" size="md" my={2}>
                        Instructions
                    </Heading>
                    <EresearchInstructions
                        config={config}
                    />
                </>
            )
        }
    </>;

    return (
        <Guide
            colorScheme="qut"
            header={header}
            body={body}
        />
    )
}