import InstructionHeading from "./components/InstructionHeading";
import InstructionText from "./components/InstructionText";
import {Alert, AlertIcon, Code, Kbd} from "@chakra-ui/react";
import CopyBox from "../../../output/CopyBox";

export function TeardownInstructions({service, jobType, environment, usingTool = false}) {
    return <>
        {service === "Lyra" && <>
            <Alert status="warning" variant="left-accent">
                <AlertIcon/>
                Lyra is a shared resource, only request the resources you need.
            </Alert>
        </>}
        {usingTool && <>
            <InstructionHeading>Stop the server</InstructionHeading>
            <InstructionText>
                Once you have finished using the tool, stop the server by pressing <Kbd>Ctrl</Kbd> + <Kbd>C</Kbd> in
                the terminal.
            </InstructionText>
            <InstructionText>
                It may take up to a minute for the server to cancel any ongoing tasks and shut down.
            </InstructionText>
        </>}
        {environment === "Singularity" && <>
            <InstructionHeading>Exit the container</InstructionHeading>
            <InstructionText>
                Exit the container by pressing <Kbd>Ctrl</Kbd> + <Kbd>D</Kbd>, or typing <Code>exit</Code> in the
                terminal.
            </InstructionText>
        </>}
        {service === "Lyra" && <>
            <InstructionHeading>Stop the job</InstructionHeading>
            {jobType === "Interactive" &&
                <InstructionText>
                    Stop the job by pressing <Kbd>Ctrl</Kbd> + <Kbd>D</Kbd>, or typing <Code>exit</Code> in the terminal.
                </InstructionText>
            }
            {jobType === "Batch" &&
                <>
                    <InstructionText>
                        The batch job will stop automatically when the job's script terminates, or the walltime elapses.
                    </InstructionText>
                    <InstructionText>
                        To stop the job early, you need to know your job id. You can either note down your job id when
                        you submit a batch job, or find the job id using the check job status command:
                        <CopyBox>
                            qstat -u $USER
                        </CopyBox>
                    </InstructionText>
                    <InstructionText>
                        To stop the job early, run the following:
                        <CopyBox>
                            {`qdel {job_id}`}
                        </CopyBox>
                    </InstructionText>
                </>
            }
            <InstructionHeading>Exit the ssh session</InstructionHeading>
            <InstructionText>
                Exit the ssh session on Lyra by pressing <Kbd>Ctrl</Kbd> + <Kbd>D</Kbd>, or typing <Code>exit</Code> in
                the terminal.
            </InstructionText>
            {usingTool && <>
                <InstructionHeading>Stop port forwarding</InstructionHeading>
                <InstructionText>
                    Stop local port forwarding by pressing <Kbd>Ctrl</Kbd> + <Kbd>D</Kbd>, or
                    typing <Code>exit</Code> in
                    the terminal window running the port forwarding command.
                </InstructionText>
            </>}
        </>}
    </>;
}