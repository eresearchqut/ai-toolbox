import { HuggingFaceInstructions } from "./HuggingFaceInstructions";

export default {
  title: "Tools/HuggingFacePipeline/HuggingFaceInstructions",
  component: HuggingFaceInstructions,
};

export const LyraGPU = {
  args: {
    task: "text-generation",
    model: "bigscience/bloom",
    config: {
      service: "Lyra",
      hardware: "GPU",
      cpuVendor: "Any",
      cpus: 8,
      ram: 32,
      gpuVendor: "NVIDIA",
      gpuModel: "A100",
      gpuModules: 8,
      tool: "CLI",
      environment: "Singularity",
    },
    port: 3456,
  },
  argTypes: {
    config: {
      tool: {
        control: {
          type: "select",
          options: ["CLI", "API"],
        },
      },
    },
  },
};
