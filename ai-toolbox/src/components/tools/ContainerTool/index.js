// ### Notes
// - Enum-like list of models & paths in `work`
// - AMD / NVIDIA / IPU / CPU
//   - Which is supported, recommended
// - Instructions for HPC (with port forwarding) vs VDI
// - Link to internal or external container / tool to build / conda env to setup
// - Multiple layers of tabs like in pytorch downloader

export const models = {
    "llama2-chat-7b": "/work/models/llama/llama2"
}

const AVAILABLE_ARCHITECTURES = {
    "accelerated": ["nvidia", "amd", "ipu", "intel"],
    "cpu": ["intel", "amd"]
};

const AVAILABLE_INTERFACES = [
    "gui",
    "tui"
]

const AVAILABLE_PLATFORMS = [
    "hpc",
    "rvdi"
]

export default ({ architectures }) =>
    <div>

    </div>;
