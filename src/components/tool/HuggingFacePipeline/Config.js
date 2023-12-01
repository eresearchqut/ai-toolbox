import {Box, Flex, Heading, Square, Tooltip} from "@chakra-ui/react";
import React from "react";
import {CheckCircleIcon, WarningIcon} from "@chakra-ui/icons";
import InputPicker from "../../input/InputPicker";
import InputSlider from "../../input/InputSlider";

function ConfigGroup({title, description, type, selected, inputProps}) {
    return (
        <Box>
            <Flex align='center'>
                <Box w='120px'>
                    {selected ?
                        <CheckCircleIcon color="green.500"/> :
                        <Tooltip label="Pick an option"><WarningIcon color="orange.500"/></Tooltip>
                    }
                    <Tooltip label={description} placement="top" hasArrow>
                        <Heading size='xs' mb="0" display="inline" ml="2">{title}</Heading>
                    </Tooltip>
                </Box>
                <Square size="10px"/>
                {
                    type === "picker" &&
                    <InputPicker {...inputProps}/>
                }
                {
                    type === "slider" &&
                    <InputSlider {...inputProps}/>
                }
            </Flex>
        </Box>
    )
}

const isValidChoice = (choices, value) => {
    if (choices.length === 0) return false;
    if (Array.isArray(choices[0])) {
        return choices.map(c => c[0]).includes(value);
    } else {
        return choices.includes(value);
    }
};

export function getConfigGroups(config, onConfigChange = () => {
}) {
    const onChange = (key) => (value) => onConfigChange({...config, [key]: value});

    const isLyra = config => config?.service === "Lyra";
    const isWorkstation = config => ["rVDI", "Local"].includes(config?.service)
    const isGPU = config => config?.hardware === "GPU";


    return {
        "service": () => {
            const services = [
                ["Lyra", "QUT's HPC cluster"],
                ["JupyterHub", "Jupyter notebooks on QUT's HPC cluster"],
                ["rVDI", "QUT's Research Virtual Desktop Infrastructure"],
                ["Local", "Your own workstation"]
            ];
            return {
                element: (key, selected) => <ConfigGroup
                    key={key}
                    title="Service"
                    description="The service to use for running the model."
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
        "os": () => {
            let operatingSystems;
            if (config?.service === "rVDI") {
                operatingSystems = ["Linux", "Windows"];
            } else if (config?.service === "Local") {
                operatingSystems = ["Linux", "macOS", "Windows"];
            } else {
                operatingSystems = ["Linux"];
            }

            return {
                element: (key, selected) => <ConfigGroup
                    key={key}
                    title="OS"
                    description="The operating system to use for running the model."
                    type="picker"
                    selected={selected}
                    inputProps={{
                        choices: operatingSystems,
                        value: config?.os,
                        onChange: onChange("os"),
                    }}
                />,
                show: (config) => isWorkstation(config),
                selected: (config) => isValidChoice(operatingSystems, config?.os),
            }
        },
        "hardware": () => {
            let hardware;
            if (isLyra(config)) {
                hardware = [
                    ["CPU", "Un-accelerated. Quick to queue, slow to run."],
                    ["GPU", "Accelerated GPU (recommended)"],
                    ["IPU", "Accelerated IPU from Graphcore"]
                ];
            } else {
                hardware = [
                    ["CPU", "Un-accelerated. Quick to queue, slow to run."],
                    ["GPU", "Accelerated GPU (recommended)"],
                ];
            }
            return {
                element: (key, selected) => <ConfigGroup
                    key={key}
                    title="Hardware"
                    description="The hardware to use for running the model."
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
        "cpuVendor": () => {
            const cpuVendors = ["Any", "AMD", "Intel"];
            return {
                element: (key, selected) => <ConfigGroup
                    key={key}
                    title="CPU Vendor"
                    type="picker"
                    selected={selected}
                    inputProps={{
                        choices: cpuVendors,
                        value: config?.cpuVendor,
                        onChange: onChange("cpuVendor"),
                    }}
                />,
                show: (config) => isLyra(config),
                selected: (config) => isValidChoice(cpuVendors, config?.cpuVendor),
            }
        },
        "cpuModel": () => {
            let cpuModels = [];
            if (config?.cpuVendor === "AMD") {
                cpuModels = ["7702", "7713", "75F3"];
            } else if (config?.cpuVendor === "Intel") {
                cpuModels = ["6140", "6248", "8260", "E7-8890"];
            }

            return {
                element: (key, selected) => <ConfigGroup
                    key={key}
                    title="CPU Model"
                    type="picker"
                    selected={selected}
                    inputProps={{
                        choices: cpuModels,
                        value: config?.cpuModel,
                        onChange: onChange("cpuModel"),
                    }}
                />,
                show: (config) => isLyra(config) && config?.cpuVendor && config.cpuVendor !== "Any",
                selected: (config) => isValidChoice(cpuModels, config?.cpuModel),
            }
        },
        "cpuCores": () => {
            let cpuCores;
            if (config?.cpuModel === "Any") {
                cpuCores = 128;
            } else if (config?.cpuModel === "7702") {
                cpuCores = 128;
            } else if (config?.cpuModel === "7713") {
                cpuCores = 128;
            } else if (config?.cpuModel === "75F3") {
                cpuCores = 64;
            } else if (config?.cpuModel === "6140") {
                cpuCores = 36;
            } else if (config?.cpuModel === "6248") {
                cpuCores = 40;
            } else if (config?.cpuModel === "8260") {
                cpuCores = 48;
            } else if (config?.cpuModel === "E7-8890") {
                cpuCores = 96;
            } else {
                cpuCores = 128;
            }

            return {
                element: (key, selected) => <ConfigGroup
                    key={key}
                    title="CPU"
                    type="slider"
                    selected={selected}
                    inputProps={{
                        value: config?.cpuCores, label: "cores", min: 1, max: cpuCores, step: 1,
                        onChange: onChange("cpuCores"),
                    }}
                />,
                show: (config) => isLyra(config),
                selected: (config) => true,
            }
        },
        "ram": () => {
            let ram;
            if (config?.cpuModel === "Any") {
                ram = 1006;
            } else if (config?.cpuModel === "7702") {
                ram = 1006;
            } else if (config?.cpuModel === "7713") {
                ram = 1006;
            } else if (config?.cpuModel === "75F3") {
                ram = 503;
            } else if (config?.cpuModel === "6140") {
                ram = 186;
            } else if (config?.cpuModel === "6248") {
                ram = 186;
            } else if (config?.cpuModel === "8260") {
                ram = 186;
            } else if (config?.cpuModel === "E7-8890") {
                ram = 5794;
            } else {
                ram = 1006;
            }

            return {
                element: (key, selected) => <ConfigGroup
                    key={key}
                    title="RAM"
                    type="slider"
                    selected={selected}
                    inputProps={{
                        value: config?.ram, label: "GB", min: 8, max: ram, step: 8,
                        onChange: onChange("ram"),
                    }}
                />,
                show: (config) => isLyra(config),
                selected: (config) => true,
            }
        },
        "jobProfile": () => {
            let profiles = [];
            if (config?.hardware === "CPU") {
                profiles = ["1 core, 8 GB", "4 cores, 32 GB", "8 cores, 64 GB", "16 cores, 128GB"];
            } else if (config?.hardware === "GPU") {
                profiles = ["4 cores, 32 GB, T4 GPU", "8 cores, 64 GB, T4 GPU"]
            }
            return {
                element: (key, selected) => <ConfigGroup
                    key={key}
                    title="Job Profile"
                    type="picker"
                    selected={selected}
                    inputProps={{
                        choices: profiles,
                        value: config?.jobProfile,
                        onChange: onChange("jobProfile"),
                    }}
                />,
                show: (config) => config?.service === "JupyterHub" && config?.hardware,
                selected: (config) => isValidChoice(profiles, config?.jobProfile),
            }
        },
        "gpuVendor": () => {
            const gpuVendors = ["Any", "NVIDIA", "AMD"];

            return {
                element: (key, selected) => {
                    return <ConfigGroup
                        key={key}
                        title="GPU Vendor"
                        type="picker"
                        selected={selected}
                        inputProps={{
                            choices: gpuVendors,
                            value: config?.gpuVendor,
                            onChange: onChange("gpuVendor"),
                        }}
                    />;
                },
                show: (config) => isLyra(config) && isGPU(config),
                selected: (config) => isValidChoice(gpuVendors, config?.gpuVendor),
            }
        },
        "gpuModel": () => {
            let gpuModels = [];
            if (config?.gpuVendor === "NVIDIA") {
                gpuModels = ["T4", "P100", "V100", "A100"];
            } else if (config?.gpuVendor === "AMD") {
                gpuModels = ["MI100", "MI210"];
            }
            return {
                element: (key, selected) => <ConfigGroup
                    key={key}
                    title="GPU Model"
                    type="picker"
                    selected={selected}
                    inputProps={{
                        choices: gpuModels,
                        value: config?.gpuModel,
                        onChange: onChange("gpuModel"),
                    }}
                />,
                show: (config) => isLyra(config) && config?.hardware === "GPU" && config?.gpuVendor && config.gpuVendor !== "Any",
                selected: (config) => isValidChoice(gpuModels, config?.gpuModel),
            }
        },
        "gpuModules": () => {
            return {
                element: (key, selected) => <ConfigGroup
                    key={key}
                    title="GPU"
                    type="slider"
                    selected={selected}
                    inputProps={{
                        value: config?.gpuModules, label: "modules", min: 1, max: 8, step: 1,
                        onChange: onChange("gpuModules"),
                    }}
                />,
                show: (config) => isLyra(config) && isGPU(config),
                selected: (config) => true,
            }
        },
        "environment": () => {
            let environments = [];
            if (config?.service === "JupyterHub") {
                environments = [["Conda", "Conda package manager"]];
            } else if (isWorkstation(config) && ["macOS", "Windows"].includes(config?.os)) {
                environments = [["Conda", "Conda package manager"], ["venv", "Python virtual environments"]];
            } else {
                environments = [["Apptainer", "Apptainer / Singularity container"], ["Conda", "Conda package manager"], ["venv", "Python virtual environments"]];
            }

            return {
                element: (key, selected) => <ConfigGroup
                    key={key}
                    title="Environment"
                    description="The Python package management system."
                    type="picker"
                    selected={selected}
                    inputProps={{
                        choices: environments,
                        value: config?.environment,
                        onChange: onChange("environment"),
                    }}
                />,
                show: (config) => config?.service,
                selected: (config) => isValidChoice(environments, config?.environment),
            }
        },
        "tool": () => {
            let tools = [];
            if (config?.service === "Lyra") {
                tools = [["CLI", "Use Gradio's Command-Line-Interface"], ["Script", "Run a generated Python script"]];
            } else {
                tools = [["CLI", "Use Gradio's Command-Line-Interface"], ["Script", "Run a generated Python script"], ["Notebook", "Run a generated Jupyter notebook"]];
            }

            return {
                element: (key, selected) => <ConfigGroup
                    key={key}
                    title="Tool"
                    description="The interface to use for running the model."
                    type="picker"
                    selected={selected}
                    inputProps={{
                        choices: tools,
                        value: config?.tool,
                        onChange: onChange("tool"),
                    }}
                />,
                show: (config) => config?.service,
                selected: (config) => isValidChoice(tools, config?.tool),
            }
        },
    }
}

export function Config({config, onConfigChange}) {
    return (
        <Box>
            {
                Object.entries(getConfigGroups(config, onConfigChange))
                    .map(([key, configGroup]) => [key, configGroup()])
                    .filter(([_, configGroup]) => configGroup.show(config))
                    .map(([key, configGroup]) => configGroup.element(key, configGroup.selected(config)))
            }
        </Box>
    )
}