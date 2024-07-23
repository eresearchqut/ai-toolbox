import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";

import TextWithLink from "../../../navigation/TextWithLink";
import CopyBox from "../../../output/CopyBox";
import AlertHelper from "../Config/AlertHelper";
import InstructionHeading from "./components/InstructionHeading";
import InstructionText from "./components/InstructionText";
import { singularityContainerName } from "./utils";

function SingularityBuildInstructions({ hardware, gpuVendor }) {
  const containerName = singularityContainerName(hardware, gpuVendor);
  let containerTag = "cpu";
  if (hardware === "GPU") {
    if (gpuVendor === "NVIDIA") {
      containerTag = "nvidia";
    } else if (gpuVendor === "AMD") {
      containerTag = "amd";
    }
  }
  return (
    <CopyBox>
      singularity build {containerName}{" "}
      docker://ghcr.io/eresearchqut/ai-toolbox/hf_pipeline:{containerTag}
    </CopyBox>
  );
}
function SingularityRunInstructions({ hardware, gpuVendor, service }) {
  const args = [];
  if (hardware === "GPU") {
    args.push("--nv");
  }
  if (service === "Lyra") {
    args.push(
      "--bind /:/lyra",
      "--bind /work:/work",
      "--contain",
      "--cleanenv",
    );
  }
  const argsString = args.length > 0 ? args.join(" ") + " " : "";
  const containerLocation =
    service === "Lyra" ? "/work/ai-toolbox/containers/" : "";
  let containerName = singularityContainerName(hardware, gpuVendor);
  return (
    <CopyBox>
      singularity run {argsString}
      {containerLocation}
      {containerName} bash
    </CopyBox>
  );
}

export function InstallInstructions({
  hardware,
  gpuVendor,
  service,
  environment,
  tool,
}) {
  const isWorkstation = ["rVDI", "Local"].includes(service);
  const isWorkstationNotebook = isWorkstation && tool === "Notebook";

  return (
    <>
      {environment === "Singularity" && (
        <>
          {isWorkstation && (
            <>
              <InstructionHeading>
                Install Singularity (if it has not been installed)
              </InstructionHeading>
              <InstructionText>
                <TextWithLink
                  textBeforeLink={"Follow the instructions "}
                  link={{
                    href: "https://sylabs.io/docs/",
                    text: "here",
                    color: "blue.500",
                    isExternal: true,
                  }}
                  textAfterLink={" to install singularity."}
                />
              </InstructionText>
              <InstructionHeading>Set up the container</InstructionHeading>
              <InstructionText>Build the container:</InstructionText>
              <SingularityBuildInstructions
                hardware={hardware}
                gpuVendor={gpuVendor}
              />
            </>
          )}
          {service === "Lyra" && (
            <>
              <InstructionHeading>Set up the container</InstructionHeading>
            </>
          )}
          <InstructionText>Run the container:</InstructionText>
          <SingularityRunInstructions
            hardware={hardware}
            gpuVendor={gpuVendor}
            service={service}
          />
        </>
      )}
      {environment === "Conda" && (
        <>
          {service !== "JupyterHub" && (
            <>
              <InstructionHeading>
                Install Conda (if it has not been installed)
              </InstructionHeading>
              <Tabs>
                <TabList>
                  <Tab>mamba</Tab>
                  <Tab>conda</Tab>
                </TabList>
                <TabPanels>
                  <TabPanel>
                    <InstructionText>
                      Download the latest version of micromamba
                    </InstructionText>
                    <CopyBox>
                      wget
                      https://raw.githubusercontent.com/mamba-org/micromamba-releases/main/install.sh
                    </CopyBox>
                    <InstructionText>
                      Run the installer and follow the prompts to install
                      micromamba:
                    </InstructionText>
                    <CopyBox>bash install.sh -p ~/micromamba</CopyBox>
                    <InstructionText>
                      Create an alias for micromamba
                    </InstructionText>
                    <CopyBox>
                      {'echo "alias conda=micromamba" >> ~/.bashrc'}
                    </CopyBox>
                    <InstructionText>Refresh the shell:</InstructionText>
                    <CopyBox>source ~/.bashrc</CopyBox>
                  </TabPanel>
                  <TabPanel>
                    <AlertHelper
                      alertType="warning"
                      alertMsg={
                        "Packages take a long time to install with conda. We recommend using mamba instead."
                      }
                      alertDismissible={false}
                    />
                    <InstructionText>
                      Download the latest version of miniconda:
                    </InstructionText>
                    <CopyBox>
                      wget
                      https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh
                    </CopyBox>
                    <InstructionText>
                      Run the installer and follow the prompts to install conda:
                    </InstructionText>
                    <CopyBox>bash Miniconda3-latest-Linux-x86_64.sh</CopyBox>
                    <InstructionText>Refresh the shell:</InstructionText>
                    <CopyBox>source ~/.bashrc</CopyBox>
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </>
          )}
          <InstructionHeading>Set up the conda environment</InstructionHeading>
          <InstructionText>
            Create the conda environment (if it doesn&apos;t exist):
          </InstructionText>
          <CopyBox>conda create --name hf</CopyBox>
          <InstructionText>Activate the conda environment:</InstructionText>
          <CopyBox>conda activate hf</CopyBox>
          <InstructionText>Install the transformers package:</InstructionText>
          <CopyBox>
            conda install -c huggingface -c conda-forge transformers
          </CopyBox>
          <InstructionText>Install pytorch:</InstructionText>
          <CopyBox>
            conda install -c pytorch -c nvidia -c conda-forge pytorch
            torchvision torchaudio pytorch-cuda=12.1
          </CopyBox>
          <InstructionText>Install the gradio package:</InstructionText>
          <CopyBox>conda install -c conda-forge gradio</CopyBox>
          {isWorkstationNotebook && (
            <>
              <InstructionText>Install JupyterLab:</InstructionText>
              <CopyBox>conda install -c conda-forge jupyterlab</CopyBox>
            </>
          )}
        </>
      )}
      {environment === "venv" && (
        <>
          {isWorkstation && (
            <>
              <InstructionHeading>
                Install Python (if it has not been installed)
              </InstructionHeading>
              <InstructionText>
                <TextWithLink
                  textBeforeLink={"Follow the instructions "}
                  link={{
                    href: "https://www.python.org/downloads/",
                    text: "here",
                    color: "blue.500",
                    isExternal: true,
                  }}
                  textAfterLink={" to install python."}
                />
              </InstructionText>
            </>
          )}
          {service === "Lyra" && (
            <>
              <InstructionHeading>Python module</InstructionHeading>
              <InstructionText>Source the module script:</InstructionText>
              <CopyBox>source /etc/profile.d/modules.sh</CopyBox>
              <InstructionText>Load the python module:</InstructionText>
              <CopyBox>module load python/3.10.8-gcccore-12.2.0-bare</CopyBox>
              <InstructionText>Check the python version</InstructionText>
              <CopyBox>python --version</CopyBox>
            </>
          )}
          <InstructionHeading>
            Set up the virtual environment
          </InstructionHeading>
          <InstructionText>
            Create the virtual environment (if it doesn&apos;t exist):
          </InstructionText>
          <CopyBox>python -m venv hf-venv</CopyBox>
          <InstructionText>Activate the virtual environment:</InstructionText>
          <CopyBox>source hf-venv/bin/activate</CopyBox>
          <InstructionText>Install the base dependencies:</InstructionText>
          <CopyBox>pip install gradio &apos;transformers[torch]&apos;</CopyBox>
          {isWorkstationNotebook && (
            <>
              <InstructionText>Install JupyterLab:</InstructionText>
              <CopyBox>pip install jupyterlab</CopyBox>
            </>
          )}
        </>
      )}
    </>
  );
}
