target "docker-metadata-action" {}

group "hf_pipeline" {
  targets = [
    "hf_pipeline_cpu",
    "hf_pipeline_nvidia",
    "hf_pipeline_amd",
  ]
}

target "hf_pipeline_cpu" {
  inherits = ["docker-metadata-action"]
  context = "./"
  dockerfile = "containers/hf_pipeline.Dockerfile"
  target = "cpu"
  platforms = [
    "linux/amd64",
  ]
}

target "hf_pipeline_nvidia" {
  inherits = ["docker-metadata-action"]
  context = "./"
  dockerfile = "containers/hf_pipeline.Dockerfile"
  target = "nvidia"
  platforms = [
    "linux/amd64",
  ]
}

target "hf_pipeline_amd" {
  inherits = ["docker-metadata-action"]
  context = "./"
  dockerfile = "containers/hf_pipeline.Dockerfile"
  target = "amd"
  platforms = [
    "linux/amd64",
  ]
}