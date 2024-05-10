export function singularityContainerName(hardware, gpuVendor) {
    let containerName = "hf_pipeline.sif"
    if (hardware === "GPU") {
        if (gpuVendor === "NVIDIA") {
            containerName = "hf_pipeline_nvidia.sif";
        } else if (gpuVendor === "AMD") {
            containerName = "hf_pipeline_amd.sif";
        }
    } else if (hardware === "CPU") {
        containerName = "hf_pipeline_cpu.sif";
    }
    return containerName;
}