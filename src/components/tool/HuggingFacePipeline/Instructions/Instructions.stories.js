import {Instructions} from "./Instructions";

export default {
    title: 'Tools/HuggingFacePipeline/Instructions',
    component: Instructions,
}

export const LyraGPU = {
    args: {
        task: 'text-generation',
        model: 'bigscience/bloom',
        config: {
            service: "Lyra",
            hardware: "GPU",
            cpuVendor: "Any",
            cpuCores: 8,
            ram: 32,
            gpuVendor: "NVIDIA",
            gpuModel: "A100",
            gpuModules: 8,
            tool: "CLI",
            environment: "Apptainer"
        },
        port: 3456
    },
    argTypes: {
        config: {
            tool: {
                control: {
                    type: 'select', options: ['CLI', 'API']
                }
            }
        },
    }
}


