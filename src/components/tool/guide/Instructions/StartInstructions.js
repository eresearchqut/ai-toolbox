import { Code } from "@chakra-ui/react";

import { useState } from "react";

import TextWithLink from "../../../navigation/TextWithLink";
import CommandBox from "../../../output/CommandBox";
import InstructionInput from "./InstructionInput";
import InstructionHeading from "./components/InstructionHeading";
import InstructionText from "./components/InstructionText";

export function LyraStartInstructions({
  jobType,
  jobName = "",
  resources,
  nodes,
  wallTime,
  hardware,
  cpuVendor,
  cpuModel,
  cpus,
  ram,
  gpuVendor,
  gpuModel,
  gpuModules,
  jobInstanceType,
  arrayConfig,
}) {
  const resourceValues = [
    `select=${jobType === "Interactive" || resources === "Automatic" ? 1 : nodes}`,
    `ncpus=${cpus}`,
    `mem=${ram}gb`,
  ];

  if (resources === "Custom") {
    if (cpuVendor !== "Any") {
      if (cpuModel !== "Any") resourceValues.push(`cputype=${cpuModel}`);
      else
        resourceValues.push(
          cpuVendor === "AMD" ? "cpuarch=amd" : "cpuarch=avx512",
        );
    }
    if (hardware === "GPU") {
      resourceValues.push(`ngpus=${gpuModules}`);
      if (gpuVendor !== "Any" && gpuModel) {
        resourceValues.push(`gputype=${gpuModel}`);
      }
    }
  }

  const jobParameters = [
    jobType === "Interactive" ? " -I -S /bin/bash" : "",
    jobType !== "Interactive" && jobName !== "" ? ' -N "' + jobName + '"' : "",
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
    `#PBS -N ${jobName}`,
    `#PBS -l walltime=${wallTimeStr}`,
    `#PBS -l ${resourceValues.join(":")}`,
    ...(jobInstanceType === "Array"
      ? [
          `#PBS -J ${arrayConfig?.firstIndex}-${arrayConfig?.upperBound}${arrayConfig?.step > 1 ? `:${arrayConfig?.step}` : ""}`,
        ]
      : []),
    "",
    "cd $PBS_O_WORKDIR",
    "",
    "echo \"Running job '$PBS_JOBNAME' ($PBS_JOBID) in the following directory: $PWD\"",
    'echo "Data written to stderr" >&2',
  ];

  const [scriptPath, setScriptPath] = useState();

  const cmdText =
    jobType === "Interactive"
      ? `qsub${jobParameters.join("")} -l walltime=${wallTimeStr} -l ${resourceValues.join(":")}`
      : `qsub ${scriptPath || `${jobName}.pbs`}`;

  return (
    <>
      {jobType === "Batch" && (
        <>
          <InstructionHeading>Create the batch job script</InstructionHeading>
          <InstructionText>
            A job script contains the commands you want to run as part of the
            job. The script will be saved on the Lyra filesystem.
          </InstructionText>
          <InstructionInput
            label="Script Path"
            placeholder={`${jobName}.pbs`}
            value={scriptPath}
            onChange={setScriptPath}
            helperText="Enter the path where the script will be saved, or leave blank to use the default."
          />
          <InstructionText>
            Run the following command to create the batch job script:
          </InstructionText>
          <CommandBox
            command={[
              `cat <<'EOF' > ${scriptPath || `${jobName}.pbs`}`,
              ...batchJobScript,
              "EOF",
              "",
            ].join("\n")}
          />
          <InstructionText>
            Run the following command to confirm the contents of the script:
          </InstructionText>
          <CommandBox
            command={`cat ${scriptPath || `${jobName}.pbs`}`}
            output={batchJobScript.join("\n")}
          />
        </>
      )}
      {resources === "Custom" && (
        <>
          <InstructionHeading>Custom resources</InstructionHeading>
          <InstructionText>
            Before running the job, double-check that the resources requested
            are available on a node by running the following command:
          </InstructionText>
          <CommandBox
            command={`pbsnodeinfo`}
            output={`Node    :   cputype |        cpuarch ;    cpu usage;    mem usage; gputype; gpu usage
=====================================================================================
cl4n001 : E7-8890v4 |       avx,avx2 ; 110 / 192 cpus; 5599 / 5791 GB
cl4n002 :      6140 |avx,avx2,avx512 ; 11 / 36 cpus; 178 / 183 GB;  P100; 3 / 4 gpus
cl4n003 :      6140 |avx,avx2,avx512 ; 10 / 36 cpus; 167 / 183 GB;  P100; 3 / 4 gpus
cl4n007 :      6140 |avx,avx2,avx512 ; 31 / 36 cpus; 352 / 373 GB
cl4n008 :      6140 |avx,avx2,avx512 ; 25 / 36 cpus; 320 / 373 GB
cl4n009 :      6140 |avx,avx2,avx512 ; 35 / 36 cpus; 360 / 373 GB
cl4n010 :      6140 |avx,avx2,avx512 ; 35 / 36 cpus; 266 / 373 GB
...`}
          />
        </>
      )}

      <InstructionHeading>Schedule a job</InstructionHeading>
      <InstructionText>
        Run the following command to schedule the {jobType.toLowerCase()} job:
      </InstructionText>
      <CommandBox
        command={cmdText}
        output={`{jobId}${jobInstanceType === "Array" ? "[]" : ""}.pbs`}
      />
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
