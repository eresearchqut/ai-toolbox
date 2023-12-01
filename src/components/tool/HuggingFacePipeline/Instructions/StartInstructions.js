import CopyBox from "../../../output/CopyBox";
import {Code} from "@chakra-ui/react";
import InstructionHeading from "./components/InstructionHeading";
import InstructionText from "./components/InstructionText";

export function LyraStartInstructions({
                                          hardware,
                                          cpuVendor,
                                          cpuModel,
                                          cpuCores,
                                          ram,
                                          gpuVendor,
                                          gpuModel,
                                          gpuModules,
                                      }) {
    const resources = ["select=1", `ncpus=${cpuCores}`, `mem=${ram}gb`];
    if (cpuVendor !== "Any" && cpuModel) resources.push(`cputype=${cpuModel}`);
    if (hardware === "GPU") {
        resources.push(`ngpus=${gpuModules}`);
        if (gpuVendor !== "Any" && gpuModel) {
            resources.push(`gputype=${gpuModel}`);
        }
    }
    return <>
        <InstructionHeading>Schedule an interactive job</InstructionHeading>
        <InstructionText>
            In the ssh session, run the following command to schedule an interactive job:
        </InstructionText>
        <CopyBox>
            {`qsub -I -l walltime=1:00:00 -l ${resources.join(":")}`}
        </CopyBox>
        <InstructionText>
            Wait for the job to start, and take note of the node you are on (eg. <Code>cl5n042</Code>).
        </InstructionText>
    </>
}

export function JupyterHubStartInstructions({jobProfile}) {
    return <>
        <InstructionHeading>Schedule a job</InstructionHeading>
        <InstructionText>
            From the JupyterHub home page, click <Code>Start My Server</Code> to schedule a job.
        </InstructionText>
        <InstructionText>
            From the list of available options, select the one containing <Code>Lyra - {jobProfile}</Code> and click the
            start button.
        </InstructionText>
    </>
}

export function RvdiStartInstructions({hardware, os}) {
    let machineName;
    if (os === "Linux") {
        machineName = "Red Hat VDI Medium with GPU";
    } else if (hardware === "GPU") {
        machineName = "eResearch Large with GPU";
    } else {
        machineName = "eResearch General VDI";
    }

    return <>
        <InstructionHeading>Start a session</InstructionHeading>
        <InstructionText>
            From the list of machines, select the one named <Code>{machineName}</Code>
        </InstructionText>
    </>
}

export function LocalStartInstructions({hardware, os}) {
}