import { Code, Flex, Kbd, Radio, RadioGroup } from "@chakra-ui/react";

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
  )}${jobType === "Batch" && scriptInput === "file" ? " " + (scriptPath || `${jobName}.pbs`) : ""}`;

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
          <CopyBox editable={true} wrap={false}>
            {batchJobScript.join("\n")}
          </CopyBox>
          <InstructionText>
            You may either:
            <RadioGroup defaultValue="file" onChange={setScriptInput}>
              <Flex direction="column">
                <Radio value="file">
                  Save the script as a file on Lyra (eg.{" "}
                  <Code>{jobName}.pbs</Code>)
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
          placeholder={`${jobName}.pbs`}
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
