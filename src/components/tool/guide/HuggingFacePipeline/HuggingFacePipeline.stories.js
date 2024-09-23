import HuggingFacePipeline from "./HuggingFacePipeline";

export default {
  title: "Tools/HuggingFacePipeline",
  component: HuggingFacePipeline,
};

export const TextGeneration = {
  args: {
    title: "Text Generation",
    task: "text-generation",
  },
};

export const TextGenerationPresets = {
  args: {
    title: "Text Generation",
    task: "text-generation",
    presets: [
      {
        name: "Llama-2-70b-chat on Lyra with 8 A100 GPUs",
        model: "meta-llama/Llama-2-70b-chat-hf",
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
      },
      {
        name: "Llama-2-7b-chat locally",
        model: "meta-llama/Llama-2-7b-chat-hf",
        config: {
          service: "Local",
          os: "Linux",
          hardware: "GPU",
          tool: "CLI",
          environment: "Singularity",
        },
      },
      {
        name: "Bloom on Lyra with an A100 GPU",
        model: "bigscience/bloom",
        config: {
          service: "Lyra",
          hardware: "GPU",
          cpuVendor: "Any",
          cpus: 4,
          ram: 16,
          gpuVendor: "NVIDIA",
          gpuModel: "A100",
          gpuModules: 1,
          tool: "CLI",
          environment: "Singularity",
        },
      },
    ],
  },
};

export const ImageClassification = {
  args: {
    title: "Image Classification",
    task: "image-classification",
  },
};

export const ObjectDetection = {
  args: {
    title: "Object Detection",
    task: "object-detection",
  },
};

export const AutomaticSpeechRecognition = {
  args: {
    title: "Automatic Speech Recognition",
    task: "automatic-speech-recognition",
  },
};

export const TextToSpeech = {
  args: {
    title: "Text to Speech",
    task: "text-to-speech",
  },
};

export const TextToImage = {
  args: {
    title: "Text to Image",
    task: "text-to-image",
  },
};
