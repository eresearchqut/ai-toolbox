import {
  Code,
  Flex,
  Kbd,
  ListItem,
  Radio,
  RadioGroup,
  UnorderedList,
} from "@chakra-ui/react";

import { useState } from "react";

import TextWithLink from "../../../navigation/TextWithLink";
import CopyBox from "../../../output/CopyBox";
import InstructionInput from "./InstructionInput";
import InstructionHeading from "./components/InstructionHeading";
import InstructionText from "./components/InstructionText";

export function LyraStartInstructions({
  jobType,
  jobName = "",
  nodes,
  wallTime,
  hardware,
  cpuVendor,
  cpuModel,
  cpuCores,
  ram,
  gpuVendor,
  gpuModel,
  gpuModules,
  jobInstanceType,
  arrayConfig,
}) {
  const resources = [
    `select=${jobType === "Interactive" ? 1 : nodes}`,
    `ncpus=${cpuCores}`,
    `mem=${ram}gb`,
  ];
  if (cpuVendor !== "Any") {
    if (cpuModel !== "Any") resources.push(`cputype=${cpuModel}`);
    else resources.push(cpuVendor === "AMD" ? "cpuarch=amd" : "cpuarch=avx512");
  }
  if (hardware === "GPU") {
    resources.push(`ngpus=${gpuModules}`);
    if (gpuVendor !== "Any" && gpuModel) {
      resources.push(`gputype=${gpuModel}`);
    }
  }

  const jobParameters = [
    jobType === "Interactive" ? " -I -S /bin/bash" : "",
    jobType !== "Interactive" && jobName !== "" ? ' -N "' + jobName + '"' : "",
    jobType === "Batch" && jobInstanceType === "Array"
      ? " -J " + arrayConfig?.firstIndex + "-" + arrayConfig?.upperBound
      : "",
    jobType === "Batch" && jobInstanceType === "Array" && arrayConfig?.step > 1
      ? ":" + arrayConfig?.step
      : "",
  ];

  const wallTimeStr =
    jobType === "Interactive"
      ? "01:00:00"
      : (wallTime?.hours < 10 ? "0" : "") +
        wallTime?.hours +
        ":" +
        (wallTime?.minutes < 10 ? "0" : "") +
        wallTime?.minutes +
        ":00";

  const batchJobScript = [
    "#!/bin/bash -l",
    "",
    "cd $PBS_O_WORKDIR",
    "",
    "echo \"Running job '$PBS_JOBNAME' ($PBS_JOBID) in the following directory: $PWD\"",
  ];

  const [scriptInput, setScriptInput] = useState("file");
  const [scriptPath, setScriptPath] = useState();

  const cmdText = `qsub${jobParameters.join("")} -l walltime=${wallTimeStr} -l ${resources.join(
    ":",
  )}${jobType === "Batch" && scriptInput === "file" ? " " + (scriptPath || `${jobName}.sh`) : ""}`;

  return (
    <>
      {jobType === "Batch" && (
        <>
          <InstructionHeading>Create the batch job script</InstructionHeading>
          <InstructionText>
            A job script contains the commands you want to run as part of the
            job.
          </InstructionText>
          <InstructionText>
            Click the example script below to edit it, or copy it into your
            preferred text editor.
          </InstructionText>
          <InstructionText>
            <TextWithLink
              textBeforeLink={
                "To use a text editor such as nano or vim on Lyra, refer to the tutorial on "
              }
              link={{
                href: "https://qutvirtual4.qut.edu.au/group/staff/research/conducting/facilities/advanced-research-computing-storage/supercomputing/using-linux",
                text: "this page",
                color: "blue.500",
                isExternal: true,
              }}
              hasExternalIcon={true}
              textAfterLink={"."}
            />
          </InstructionText>
          <CopyBox editable={true}>{batchJobScript.join("\n")}</CopyBox>
          <InstructionText>
            You may either:
            <RadioGroup defaultValue="file" onChange={setScriptInput}>
              <Flex direction="column">
                <Radio value="file">
                  Save the script as a file on Lyra (eg.{" "}
                  <Code>{jobName}.sh</Code>)
                </Radio>
                <Radio value="stdin">
                  Run the command below, then paste the script into the
                  command&apos;s input
                </Radio>
              </Flex>
            </RadioGroup>
          </InstructionText>
        </>
      )}
      {jobType === "Batch" && scriptInput === "file" && (
        <InstructionInput
          label="Script Path"
          placeholder={`${jobName}.sh`}
          value={scriptPath}
          onChange={setScriptPath}
          helperText="Enter the path of the script on Lyra."
        />
      )}

      <InstructionHeading>Schedule a job</InstructionHeading>
      <InstructionText>
        In the ssh session, run the following command to schedule the{" "}
        {jobType.toLowerCase()} job:
      </InstructionText>
      <CopyBox>{cmdText}</CopyBox>
      {scriptInput === "stdin" && (
        <InstructionText>
          Paste the batch job script above into the command&apos;s input, then
          press <Kbd>Ctrl</Kbd> + <Kbd>D</Kbd> to submit the job.
        </InstructionText>
      )}
      <InstructionHeading>Job status</InstructionHeading>
      <InstructionText>
        The job has been scheduled and will start running when resources are
        available.
      </InstructionText>
      {jobType === "Interactive" && (
        <>
          <InstructionText>
            Wait for the job to start, and take note of the node you are on (eg.{" "}
            <Code>cl5n042</Code>).
          </InstructionText>
        </>
      )}
      {jobType === "Batch" && (
        <>
          <InstructionText>
            You can check the status of your jobs by running the following
            command:
          </InstructionText>
          <CopyBox>qstat -xu $USER</CopyBox>
          <InstructionText>
            The output will look similar to the following:
          </InstructionText>
          <CopyBox>
            {`pbs: 
                                                                 Req'd  Req'd   Elap
Job ID               Username Queue    Jobname  SessID NDS TSK Memory Time  S Time
-------------------- -------- -------- -------- ------ --- --- ------ ----- - -----
1234567.pbs          username quick    job-name    --    1   4   32gb 01:00 Q   --`}
          </CopyBox>
          <InstructionText>
            The job status will be shown in the <Code>S</Code> column. Possible
            values are:
            <UnorderedList>
              <ListItem>
                <Code>Q</Code> - Queued
              </ListItem>
              <ListItem>
                <Code>R</Code> - Running
              </ListItem>
              <ListItem>
                <Code>B</Code> - Array job has at least one subjob running
              </ListItem>
              <ListItem>
                <Code>H</Code> - Held
              </ListItem>
              <ListItem>
                <Code>S</Code> - Suspended
              </ListItem>
              <ListItem>
                <Code>E</Code> - Exiting
              </ListItem>
              <ListItem>
                <Code>F</Code> - Finished
              </ListItem>
            </UnorderedList>
          </InstructionText>
        </>
      )}
    </>
  );
}

export function JupyterHubStartInstructions({ jobProfile }) {
  return (
    <>
      <InstructionHeading>Schedule a job</InstructionHeading>
      <InstructionText>
        From the JupyterHub home page, click <Code>Start My Server</Code> to
        schedule a job.
      </InstructionText>
      <InstructionText>
        From the list of available options, select the one containing{" "}
        <Code>Lyra - {jobProfile}</Code> and click the <Code>Start</Code>{" "}
        button.
      </InstructionText>
      <InstructionHeading>Waiting Screen</InstructionHeading>
      <InstructionText>
        You will now enter a waiting screen and see the following message:
        <br />
        <Code>Your server is starting up.</Code>
        <br />
        <Code>
          You will be redirected automatically when it&apos;s ready for you
        </Code>
      </InstructionText>
      <InstructionText>Wait for the to be redirected.</InstructionText>
      <InstructionText>
        <TextWithLink
          textBeforeLink={
            "It may take up to 10 minutes for your job to be queued and for the server to start. If it fails to start, please raise an incident in the "
          }
          link={{
            href: "https://eresearchqut.atlassian.net/servicedesk/customer/portals",
            text: "eResearch help centre",
            color: "blue.500",
            isExternal: true,
          }}
          hasExternalIcon={true}
          textAfterLink={"."}
        />
      </InstructionText>
    </>
  );
}

export function RvdiStartInstructions({ hardware, os }) {
  let machineName;
  if (os === "Linux") {
    machineName = "Red Hat VDI Medium with GPU";
  } else if (hardware === "GPU") {
    machineName = "eResearch Large with GPU";
  } else {
    machineName = "eResearch General VDI";
  }

  return (
    <>
      <InstructionHeading>Start a session</InstructionHeading>
      <InstructionText>
        From the list of machines, select the one named{" "}
        <Code>{machineName}</Code>
      </InstructionText>
    </>
  );
}

export function LocalStartInstructions({ _hardware, _os }) {}
