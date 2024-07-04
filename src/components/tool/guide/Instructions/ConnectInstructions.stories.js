import { ConnectInstructions } from "./ConnectInstructions";

export default {
  title:
    "Tools/HuggingFacePipeline/HuggingFaceInstructions/ConnectInstructions",
  component: ConnectInstructions,
};

export const Lyra = {
  args: {
    service: "Lyra",
  },
};

export const JupyterHub = {
  args: {
    service: "JupyterHub",
  },
};

export const RVDI = {
  args: {
    service: "rVDI",
  },
};

export const Local = {
  args: {
    service: "Local",
  },
};
