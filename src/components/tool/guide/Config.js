import {Box, Flex, Heading, Square, Tooltip} from "@chakra-ui/react";
import React from "react";
import {CheckCircleIcon, WarningIcon} from "@chakra-ui/icons";
import InputPicker from "../../input/InputPicker";
import InputSlider from "../../input/InputSlider";

// import pbsnodeinfo from "./pbsnodeinfo.json";
const pbsnodeinfo = {nodes: {}};

export const DEFAULT_CONFIG = {nodes: 1, cpuCores: 4, ram: 16, gpuModules: 1};

const lyraConfigOptions = (config) => {
    let nodeResources = Object.values(pbsnodeinfo.nodes).map(n => n["resources_available"]);
    const strSplit = (value) => String(value).split(",");
    const getValues = (key) => new Set(nodeResources.filter(r => r[key]).flatMap((r) => strSplit(r[key])));
    const filterValues = (key) => nodeResources.filter(r => r[key]).flatMap((r) => strSplit(r[key]));
    const getMappedValues = (key, map) => new Set(Array.from(getValues(key)).map(v => map[v]));
    const filterMappedValues = (key, map) => nodeResources.filter(r => map[strSplit(r[key])]);

    const parseNumeric = v => parseInt(v.replace(/\D/g, ''));
    const getMaxValue = (key) => Math.max(...Array.from(getValues(key)).map(v => parseNumeric(v)));
    const filterMinValue = (key, min) => nodeResources.filter(r => parseNumeric(r[key]) >= min);
    const getHasValue = (key) => getValues(key).size > 0;
    const filterHasValue = (key) => nodeResources.filter(r => r[key]);

    return {
        "hardware": getHasValue("cputype") ? ["CPU", "GPU"] : ["CPU"],
        "cpuVendor": getMappedValues("cputype", {
            "7702": "amd",
            "7713": "amd",
            "75F3": "amd",
            "6140": "intel",
            "6248": "intel",
            "8260": "intel",
            "E7-8890v4": "intel",
        }),
        "cpuModel": getValues("cputype"),
        "cpuCores": getMaxValue("ncpus"),
        "ram": getMaxValue("mem"),
        "gpuVendor": getMappedValues("gputype", {
            "T4": "NVIDIA",
            "P100": "NVIDIA",
            "V100": "NVIDIA",
            "A100": "NVIDIA",
            "MI100": "AMD",
            "MI210": "AMD",
        }),
        "gpuModel": getValues("gputype"),
        "gpuModules": getMaxValue("ngpus"),
    }
}

export function ConfigGroup({title, description, type, selected, inputProps}) {
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

export const isValidChoice = (choices, value) => {
    if (choices.length === 0) return false;
    if (Array.isArray(choices[0])) {
        return choices.map(c => c[0]).includes(value);
    } else {
        return choices.includes(value);
    }
};

export const isLyra = config => config?.service === "Lyra";
export const isWorkstation = config => ["rVDI", "Local"].includes(config?.service)
export const isGPU = config => config?.hardware === "GPU";
export const getOs = (config, onChange) => () => {
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
};

export const getCpuVendor = (config, onChange) => () => {
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
};

export const getCpuModel = (config, onChange) => () => {
    let cpuModels = [];
    if (config?.cpuVendor === "AMD") {
        cpuModels = ["7702", "7713", "75F3"];
    } else if (config?.cpuVendor === "Intel") {
        cpuModels = ["6140", "6248", "8260", "E7-8890v4"];
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
};

export const getCpuCores = (config, onChange) => () => {
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
    } else if (config?.cpuModel === "E7-8890v4") {
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
};

export const getRam = (config, onChange) => () => {
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
    } else if (config?.cpuModel === "E7-8890v4") {
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
};

export const getJobProfile = (config, onChange) => () => {
    let profiles = [];
    if (config?.hardware === "CPU") {
        profiles = ["1 core, 8 GB, 8 hours", "4 cores, 32 GB, 8 hours", "8 cores, 64 GB, 4 hours", "16 cores, 128GB, 4 hours"];
    } else if (config?.hardware === "GPU") {
        profiles = ["4 cores, 32 GB, T4 GPU, 4 hours", "8 cores, 64 GB, T4 GPU, 2 hours"]
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
};

export const getGpuVendor = (config, onChange) => () => {
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
};

export const getGpuModel = (config, onChange) => () => {
    let gpuModels = [];
    if (config?.gpuVendor === "NVIDIA") {
        gpuModels = [
            ["T4", "Tesla T4 16 GB"],
            ["P100", "TESLA P100-PCIE-16GB"],
            ["V100", "TESLA V100-PCIE-32GB"],
            ["A100", "NVIDIA A100-SXM4-40GB"],
        ]
    } else if (config?.gpuVendor === "AMD") {
        gpuModels = [
            ["MI100", "AMD MI100 32 GB"],
            ["MI210", "AMD MI210 16 GB"],
        ]
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
};

export const getGpuModules = (config, onChange) => () => {
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
};

export const getEnvironment = (config, onChange) => () => {
    let environments = [];
    if (config?.service === "JupyterHub") {
        environments = [["Conda", "Conda package manager"]];
    } else if (isWorkstation(config) && ["macOS", "Windows"].includes(config?.os)) {
        environments = [["Conda", "Conda package manager"], ["venv", "Python virtual environments"]];
    } else {
        environments = [["Singularity", "Singularity / Singularity container"], ["Conda", "Conda package manager"], ["venv", "Python virtual environments"]];
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
};

export const getTool = (config, onChange) => () => {
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
};

export function Config({config, onConfigChange, getConfigGroups}) {
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

export const configComplete = (config, getConfigGroups) => Object.values(getConfigGroups(config)).map(g => g()).filter(g => g.show(config)).every(g => g.selected(config));
