import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";

import TextWithLink from "../../../navigation/TextWithLink";
import PreformattedBox from "../../../output/PreformattedBox";
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
    <PreformattedBox>
      singularity build {containerName}{" "}
      docker://ghcr.io/eresearchqut/ai-toolbox/hf_pipeline:{containerTag}
    </PreformattedBox>
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
    <PreformattedBox>
      singularity run {argsString}
      {containerLocation}
      {containerName} bash
    </PreformattedBox>
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
                    <PreformattedBox>
                      wget
                      https://raw.githubusercontent.com/mamba-org/micromamba-releases/main/install.sh
                    </PreformattedBox>
                    <InstructionText>
                      Run the installer and follow the prompts to install
                      micromamba:
                    </InstructionText>
                    <PreformattedBox>
                      bash install.sh -p ~/micromamba
                    </PreformattedBox>
                    <InstructionText>
                      Create an alias for micromamba
                    </InstructionText>
                    <PreformattedBox>
                      {'echo "alias conda=micromamba" >> ~/.bashrc'}
                    </PreformattedBox>
                    <InstructionText>Refresh the shell:</InstructionText>
                    <PreformattedBox>source ~/.bashrc</PreformattedBox>
                  </TabPanel>
                  <TabPanel>
                    <AlertHelper alertType="warning" alertDismissible={false}>
                      {
                        "Packages take a long time to install with conda. We recommend using mamba instead."
                      }
                    </AlertHelper>
                    <InstructionText>
                      Download the latest version of miniconda:
                    </InstructionText>
                    <PreformattedBox>
                      wget
                      https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh
                    </PreformattedBox>
                    <InstructionText>
                      Run the installer and follow the prompts to install conda:
                    </InstructionText>
                    <PreformattedBox>
                      bash Miniconda3-latest-Linux-x86_64.sh
                    </PreformattedBox>
                    <InstructionText>Refresh the shell:</InstructionText>
                    <PreformattedBox>source ~/.bashrc</PreformattedBox>
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </>
          )}
          <InstructionHeading>Set up the conda environment</InstructionHeading>
          <InstructionText>
            Create the conda environment (if it doesn&apos;t exist):
          </InstructionText>
          <PreformattedBox>conda create --name hf</PreformattedBox>
          <InstructionText>Activate the conda environment:</InstructionText>
          <PreformattedBox>conda activate hf</PreformattedBox>
          <InstructionText>Install the transformers package:</InstructionText>
          <PreformattedBox>
            conda install -c huggingface -c conda-forge transformers
          </PreformattedBox>
          <InstructionText>Install pytorch:</InstructionText>
          <PreformattedBox>
            conda install -c pytorch -c nvidia -c conda-forge pytorch
            torchvision torchaudio pytorch-cuda=12.1
          </PreformattedBox>
          <InstructionText>Install the gradio package:</InstructionText>
          <PreformattedBox>conda install -c conda-forge gradio</PreformattedBox>
          {isWorkstationNotebook && (
            <>
              <InstructionText>Install JupyterLab:</InstructionText>
              <PreformattedBox>
                conda install -c conda-forge jupyterlab
              </PreformattedBox>
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
              <PreformattedBox>
                source /etc/profile.d/modules.sh
              </PreformattedBox>
              <InstructionText>Load the python module:</InstructionText>
              <PreformattedBox>
                module load python/3.10.8-gcccore-12.2.0-bare
              </PreformattedBox>
              <InstructionText>Check the python version</InstructionText>
              <PreformattedBox>python --version</PreformattedBox>
            </>
          )}
          <InstructionHeading>
            Set up the virtual environment
          </InstructionHeading>
          <InstructionText>
            Create the virtual environment (if it doesn&apos;t exist):
          </InstructionText>
          <PreformattedBox>python -m venv hf-venv</PreformattedBox>
          <InstructionText>Activate the virtual environment:</InstructionText>
          <PreformattedBox>source hf-venv/bin/activate</PreformattedBox>
          <InstructionText>Install the base dependencies:</InstructionText>
          <PreformattedBox>
            pip install gradio &apos;transformers[torch]&apos;
          </PreformattedBox>
          {isWorkstationNotebook && (
            <>
              <InstructionText>Install JupyterLab:</InstructionText>
              <PreformattedBox>pip install jupyterlab</PreformattedBox>
            </>
          )}
        </>
      )}
    </>
  );
}
