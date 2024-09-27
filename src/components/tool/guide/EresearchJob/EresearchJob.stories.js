import { DEFAULT_CONFIG } from "../Config";
import EresearchJob from "./EresearchJob";

export default {
  title: "Tools/EresearchJob",
  component: EresearchJob,
};

export const Default = {
  args: {},
};

export const NoHeader = {
  args: {
    showHeader: false,
  },
};

export const LyraBatch = {
  args: {
    initialConfig: {
      ...DEFAULT_CONFIG,
      service: "Lyra",
      jobType: "Batch",
      hardware: "CPU",
      cpuVendor: "Any",
      cpus: 4,
      ram: 32,
    },
  },
};

export const LyraInteractive = {
  args: {
    initialConfig: {
      ...DEFAULT_CONFIG,
      service: "Lyra",
      jobType: "Interactive",
      hardware: "CPU",
      cpuVendor: "Any",
      cpus: 4,
      ram: 32,
    },
  },
};

export const LyraCustomHardware = {
  args: {
    initialConfig: {
      ...DEFAULT_CONFIG,
      service: "Lyra",
      jobType: "Batch",
      hardware: "GPU",
      cpuVendor: "Intel",
      cpuModel: "6248",
      gpuVendor: "NVIDIA",
      gpuModel: "A100",
      gpuModules: 8,
      cpus: 32,
      ram: 128,
    },
  },
};

export const LyraMultiNode = {
  args: {
    initialConfig: {
      ...DEFAULT_CONFIG,
      service: "Lyra",
      jobType: "Batch",
      hardware: "CPU",
      cpuVendor: "Any",
      cpus: 4,
      ram: 32,
      nodes: 2,
    },
  },
};

export const LyraArray = {
  args: {
    initialConfig: {
      ...DEFAULT_CONFIG,
      service: "Lyra",
      jobType: "Batch",
      jobInstanceType: "Array",
      arrayConfig: { firstIndex: 0, upperBound: 1000, step: 100 },
      hardware: "CPU",
      cpuVendor: "Any",
      cpus: 4,
      ram: 32,
    },
  },
};

export const JupyterhubCPU = {
  args: {
    initialConfig: {
      ...DEFAULT_CONFIG,
      service: "JupyterHub",
      hardware: "CPU",
      jobProfile: "1 core, 8 GB, 8 hours",
    },
  },
};

export const JupyterhubGPU = {
  args: {
    initialConfig: {
      ...DEFAULT_CONFIG,
      service: "JupyterHub",
      hardware: "GPU",
      jobProfile: "4 cores, 32 GB, T4 GPU, 4 hours",
    },
  },
};

export const RvdiCPU = {
  args: {
    initialConfig: {
      ...DEFAULT_CONFIG,
      service: "rVDI",
      hardware: "CPU",
    },
  },
};
RvdiCPU.storyName = "rVDI CPU";

export const RvdiGPU = {
  args: {
    initialConfig: {
      ...DEFAULT_CONFIG,
      service: "rVDI",
      hardware: "GPU",
    },
  },
};
RvdiGPU.storyName = "rVDI GPU";
