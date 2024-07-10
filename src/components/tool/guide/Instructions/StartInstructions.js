import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Box, Checkbox, Code, Flex, Input, Link } from "@chakra-ui/react";

import { useState } from "react";

import CopyBox from "../../../output/CopyBox";
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
  isArrayJob,
  arrayJobConfig,
}) {
  const resources = [
    `select=${jobType === "Interactive" ? 1 : nodes}`,
    `ncpus=${cpuCores}`,
    `mem=${ram}gb`,
  ];
  if (cpuVendor !== "Any" && cpuModel) resources.push(`cputype=${cpuModel}`);
  if (hardware === "GPU") {
    resources.push(`ngpus=${gpuModules}`);
    if (gpuVendor !== "Any" && gpuModel) {
      resources.push(`gputype=${gpuModel}`);
    }
  }

  const jobParameters = [
    jobType === "Interactive" ? " -I -S /bin/bash" : "",
    jobType !== "Interactive" && jobName !== "" ? ' -N "' + jobName + '"' : "",
    jobType === "Batch" && isArrayJob === "Yes"
      ? " -J " + arrayJobConfig?.firstIndex + "-" + arrayJobConfig?.upperBound
      : "",
    jobType === "Batch" && isArrayJob === "Yes" && arrayJobConfig?.stepper > 1
      ? ":" + arrayJobConfig?.stepper
      : "",
  ];

  const wallTimeStr =
    jobType === "Interactive"
      ? "01:00:00"
      : (wallTime?.hour < 10 ? "0" : "") +
        wallTime?.hour +
        ":" +
        (wallTime?.minute < 10 ? "0" : "") +
        wallTime?.minute +
        ":00";

  const batchJobScript = [
    "#!/bin/bash",
    "",
    "echo \"Running job '$PBS_JOBNAME' ($PBS_JOBID) in the following directory: $PWD\"",
  ];

  const [hasScript, setHasScript] = useState(false);
  const [scriptPath, setScriptPath] = useState("");

  const cmdText = `qsub${jobParameters.join("")} -l walltime=${wallTimeStr} -l ${resources.join(
    ":",
  )}${hasScript ? " " + scriptPath : ""}`;

  return (
    <>
      {jobType === "Batch" && (
        <>
          <InstructionHeading>Creating a batch job script</InstructionHeading>
          <InstructionText>
            Before scheduling a batch job, you need to create a job script first
            (Click to edit):
            <CopyBox editable={true}>{batchJobScript.join("\n")}</CopyBox>
          </InstructionText>
          <InstructionText>
            You can either edit and copy the above content, use{" "}
            <Code>qsub</Code> command submitting a job, paste it to standard
            input to run it.
          </InstructionText>
          <InstructionText>
            (Note: When submitting a job without specifying your script, you
            will see{" "}
            <Code>
              Job script will be read from standard input. Submit with CTRL+D.
            </Code>{" "}
            which indicates standard input mode.)
          </InstructionText>
          <InstructionText>
            Alternatively, save your script as a file, and use it as a
            command-line argument.
          </InstructionText>
          <InstructionText>
            Pick your favourite text editor (e.g.: <Code>nano</Code>,{" "}
            <Code>vim</Code> or <Code>gedit</Code>). If you do not know how to
            use text editors, please{" "}
            <Link
              color="teal.500"
              href="https://qutvirtual4.qut.edu.au/group/staff/research/conducting/facilities/advanced-research-computing-storage/supercomputing/using-linux"
              isExternal
            >
              refer here
              <ExternalLinkIcon mx="2px" />
            </Link>
            .
          </InstructionText>
        </>
      )}
      <InstructionHeading>Schedule a job</InstructionHeading>
      <InstructionText>
        In the ssh session, run the following command to schedule the{" "}
        {jobType.toLowerCase()} job:
      </InstructionText>
      <Flex>
        <Box minWidth="20%">
          <Checkbox
            isChecked={hasScript}
            onChange={(e) => setHasScript(e.target.checked)}
          >
            I have a script to specify
          </Checkbox>
        </Box>
        {hasScript && (
          <Input
            size="xs"
            placeholder={"full/path/to/your_script.sh"}
            value={scriptPath}
            onChange={(e) => setScriptPath(e.target.value)}
          ></Input>
        )}
      </Flex>
      <CopyBox>{cmdText}</CopyBox>
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
            You can check the status of your jobs by running the following:
          </InstructionText>
          <CopyBox>qstat -u $USER</CopyBox>
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
        It may take up to 10 minutes for your job to be queued and for the
        server to start. If it fails to start, please raise an incident in the{" "}
        <Link
          color="teal.500"
          href="https://eresearchqut.atlassian.net/servicedesk/customer/portals"
          isExternal
        >
          eResearch help centre
          <ExternalLinkIcon mx="2px" />
        </Link>
        .
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
