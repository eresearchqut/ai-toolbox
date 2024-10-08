import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";

import TextWithLink from "../../../navigation/TextWithLink";
import CommandBox from "../../../output/CommandBox";
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
    <CommandBox
      command={`singularity build ${containerName} docker://ghcr.io/eresearchqut/ai-toolbox/hf_pipeline:${containerTag}`}
    />
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
    <CommandBox
      command={`singularity run ${argsString}${containerLocation}${containerName} bash`}
    />
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
                    <CommandBox
                      command={
                        "wget https://raw.githubusercontent.com/mamba-org/micromamba-releases/main/install.sh"
                      }
                    />
                    <InstructionText>
                      Run the installer and follow the prompts to install
                      micromamba:
                    </InstructionText>
                    <CommandBox command={"bash install.sh -p ~/micromamba"} />
                    <InstructionText>
                      Create an alias for micromamba
                    </InstructionText>
                    <CommandBox
                      command={"echo 'alias conda=micromamba' >> ~/.bashrc"}
                    />
                    <InstructionText>Refresh the shell:</InstructionText>
                    <CommandBox command={"source ~/.bashrc"} />
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
                    <CommandBox
                      command={
                        "wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh"
                      }
                    />
                    <InstructionText>
                      Run the installer and follow the prompts to install conda:
                    </InstructionText>
                    <CommandBox
                      command={"bash Miniconda3-latest-Linux-x86_64.sh"}
                    />
                    <InstructionText>Refresh the shell:</InstructionText>
                    <CommandBox command={"source ~/.bashrc"} />
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </>
          )}
          <InstructionHeading>Set up the conda environment</InstructionHeading>
          <InstructionText>
            Create the conda environment (if it doesn&apos;t exist):
          </InstructionText>
          <InstructionText>Create the conda environment:</InstructionText>
          <CommandBox command={"conda create --name hf"} />
          <InstructionText>Activate the conda environment:</InstructionText>
          <CommandBox command={"conda activate hf"} />
          <InstructionText>Install the transformers package:</InstructionText>
          <CommandBox
            command={"conda install -c huggingface -c conda-forge transformers"}
          />
          <InstructionText>Install pytorch:</InstructionText>
          <CommandBox
            command={
              "conda install -c pytorch -c nvidia -c conda-forge pytorch torchvision torchaudio pytorch-cuda=12.1"
            }
          />
          <InstructionText>Install the gradio package:</InstructionText>
          <CommandBox command={"conda install -c conda-forge gradio"} />
          {isWorkstationNotebook && (
            <>
              <InstructionText>Install JupyterLab:</InstructionText>
              <CommandBox command={"conda install -c conda-forge jupyterlab"} />
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
              <CommandBox command={"source /etc/profile.d/modules.sh"} />
              <InstructionText>Load the python module:</InstructionText>
              <CommandBox
                command={"module load python/3.10.8-gcccore-12.2.0-bare"}
              />
              <InstructionText>Check the python version</InstructionText>
              <CommandBox command={"python --version"} />
            </>
          )}
          <InstructionHeading>
            Set up the virtual environment
          </InstructionHeading>
          <InstructionText>
            Create the virtual environment (if it doesn&apos;t exist):
          </InstructionText>
          <CommandBox command={"python -m venv hf-venv"} />
          <InstructionText>Activate the virtual environment:</InstructionText>
          <CommandBox command={"source hf-venv/bin/activate"} />
          <InstructionText>Install the base dependencies:</InstructionText>
          <CommandBox command={"pip install gradio 'transformers[torch]'"} />
          {isWorkstationNotebook && (
            <>
              <InstructionText>Install JupyterLab:</InstructionText>
              <CommandBox command={"pip install jupyterlab"} />
            </>
          )}
        </>
      )}
    </>
  );
}
