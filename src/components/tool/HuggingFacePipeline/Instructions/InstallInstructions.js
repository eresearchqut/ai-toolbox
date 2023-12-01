import InstructionHeading from "./components/InstructionHeading";
import InstructionText from "./components/InstructionText";
import CopyBox from "../../../output/CopyBox";
import {Alert, AlertIcon, Code, Link, Tab, TabList, TabPanel, TabPanels, Tabs} from "@chakra-ui/react";

export function InstallInstructions({service, environment, tool}) {
    const isWorkstation = ["rVDI", "Local"].includes(service);
    const isWorkstationNotebook = isWorkstation && tool === "Notebook";

    return <>
        {environment === "Apptainer" && <>
            {isWorkstation && <>
                <InstructionHeading>Install Apptainer (if it has not been installed)</InstructionHeading>
                <InstructionText>Follow the instructions <Link
                    href="https://apptainer.org/docs/admin/main/installation.html" isExternal
                    color="blue.500">here</Link> to install apptainer.</InstructionText>
                <InstructionHeading>Set up the container</InstructionHeading>
                <InstructionText>Save the following to a file named <Code>hf.def</Code>:</InstructionText>
                <CopyBox>
                    {`Bootstrap: docker
From: python:3.10

%post
    pip install gradio jupyterlab 'transformers[torch]'
`}
                </CopyBox>
                <InstructionText>Build the container:</InstructionText>
                <CopyBox>
                    apptainer build hf.sif hf.def
                </CopyBox>
                <InstructionText>Run the container:</InstructionText>
                <CopyBox>
                    apptainer run hf.sif bash
                </CopyBox>
            </>}
            {service === "Lyra" && <>
                <InstructionHeading>Set up the container</InstructionHeading>
                <InstructionText>Run the container:</InstructionText>
                <CopyBox>
                    apptainer run /work/ai-toolbox/containers/hf.sif bash
                </CopyBox>
            </>}
        </>}
        {environment === "Conda" && <>
            {service !== "JupyterHub" && <>
                <InstructionHeading>Install Conda (if it has not been installed)</InstructionHeading>
                <Tabs>
                    <TabList>
                        <Tab>mamba</Tab>
                        <Tab>conda</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            <InstructionText>Download the latest version of micromamba</InstructionText>
                            <CopyBox>
                                wget https://raw.githubusercontent.com/mamba-org/micromamba-releases/main/install.sh
                            </CopyBox>
                            <InstructionText>Run the installer and follow the prompts to install micromamba:</InstructionText>
                            <CopyBox>
                                bash install.sh -p ~/micromamba
                            </CopyBox>
                            <InstructionText>Create an alias for micromamba</InstructionText>
                            <CopyBox>
                                echo "alias conda=micromamba" >> ~/.bashrc
                            </CopyBox>
                            <InstructionText>Refresh the shell:</InstructionText>
                            <CopyBox>
                                source ~/.bashrc
                            </CopyBox>
                        </TabPanel>
                        <TabPanel>
                            <Alert status="warning">
                                <AlertIcon/>
                                Packages take a long time to install with conda. We recommend using mamba instead.
                            </Alert>
                            <InstructionText>Download the latest version of miniconda:</InstructionText>
                            <CopyBox>
                                wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh
                            </CopyBox>
                            <InstructionText>Run the installer and follow the prompts to install conda:</InstructionText>
                            <CopyBox>
                                bash Miniconda3-latest-Linux-x86_64.sh
                            </CopyBox>
                            <InstructionText>Refresh the shell:</InstructionText>
                            <CopyBox>
                                source ~/.bashrc
                            </CopyBox>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </>}
            <InstructionHeading>Set up the conda environment</InstructionHeading>
            <InstructionText>Create the conda environment (if it doesn't exist):</InstructionText>
            <CopyBox>
                conda create --name hf
            </CopyBox>
            <InstructionText>Activate the conda environment:</InstructionText>
            <CopyBox>
                conda activate hf
            </CopyBox>
            <InstructionText>Install the transformers package:</InstructionText>
            <CopyBox>
                conda install -c huggingface -c conda-forge transformers
            </CopyBox>
            <InstructionText>Install pytorch:</InstructionText>
            <CopyBox>
                conda install -c pytorch -c nvidia -c conda-forge pytorch torchvision torchaudio pytorch-cuda=12.1
            </CopyBox>
            <InstructionText>Install the gradio package:</InstructionText>
            <CopyBox>
                conda install -c conda-forge gradio
            </CopyBox>
            {isWorkstationNotebook && <>
                <InstructionText>Install JupyterLab:</InstructionText>
                <CopyBox>
                    conda install -c conda-forge jupyterlab
                </CopyBox>
            </>}
        </>}
        {environment === "venv" && <>
            {isWorkstation && <>
                <InstructionHeading>Install Python (if it has not been installed)</InstructionHeading>
                <InstructionText>Follow the instructions <Link
                    href="https://www.python.org/downloads/" isExternal
                    color="blue.500">here</Link> to install python.</InstructionText>
            </>}
            {service === "Lyra" && <>
                <InstructionHeading>Python module</InstructionHeading>
                <InstructionText>Source the module script:</InstructionText>
                <CopyBox>
                    source /etc/profile.d/modules.sh
                </CopyBox>
                <InstructionText>Load the python module:</InstructionText>
                <CopyBox>
                    module load python/3.10.8-gcccore-12.2.0-bare
                </CopyBox>
                <InstructionText>Check the python version</InstructionText>
                <CopyBox>
                    python --version
                </CopyBox>
            </>}
            <InstructionHeading>Set up the virtual environment</InstructionHeading>
            <InstructionText>Create the virtual environment (if it doesn't exist):</InstructionText>
            <CopyBox>
                python -m venv hf-venv
            </CopyBox>
            <InstructionText>Activate the virtual environment:</InstructionText>
            <CopyBox>
                source hf-venv/bin/activate
            </CopyBox>
            <InstructionText>Install the base dependencies:</InstructionText>
            <CopyBox>
                pip install gradio 'transformers[torch]'
            </CopyBox>
            {isWorkstationNotebook && <>
                <InstructionText>Install JupyterLab:</InstructionText>
                <CopyBox>
                    pip install jupyterlab
                </CopyBox>
            </>}
        </>}
    </>
}