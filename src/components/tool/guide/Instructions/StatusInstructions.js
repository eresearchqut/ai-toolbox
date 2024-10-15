import { Code, Table, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react";

import { useState } from "react";

import CommandBox from "../../../output/CommandBox";
import InstructionInput from "./InstructionInput";
import InstructionHeading from "./components/InstructionHeading";
import InstructionText from "./components/InstructionText";

export function LyraStatusInstructions({ jobType, jobName, jobInstanceType }) {
  const [jobId, setJobId] = useState("");
  const jobIdOrPlaceholder = jobId || "12345678";
  return (
    <>
      <InstructionText>
        The job has been scheduled and will start running when resources are
        available.
      </InstructionText>
      {jobType === "Batch" && (
        <>
          <InstructionInput
            label="Job ID"
            placeholder="1234567"
            value={jobId}
            onChange={setJobId}
            pattern={/^\d*$/}
            helperText="Optionally enter the job ID so that it can be pre-populated in the commands below."
            errorText="Job ID must only contain numbers"
          />
          <InstructionHeading>Job status</InstructionHeading>
          {jobInstanceType === "Standalone" && (
            <>
              <InstructionText>
                Check the status of your jobs by running the following command:
              </InstructionText>
              <CommandBox
                command="qstat -xu $USER"
                output={`pbs:
                                                    Req'd  Req'd   Elap
Job ID       Username Queue Jobname  SessID NDS TSK Memory Time  S Time
------------ -------- ----- -------- ------ --- --- ------ ----- - -----
${jobIdOrPlaceholder}.pbs username quick job-name    --    1   4   32gb 01:00 Q   --`}
              />
            </>
          )}
          {jobInstanceType === "Array" && (
            <>
              <InstructionText>
                Check the status of your array jobs by running the following
                command:
              </InstructionText>
              <CommandBox
                command="qstat -Jxu $USER"
                output={`pbs:
                                                      Req'd  Req'd   Elap
Job ID         Username Queue Jobname  SessID NDS TSK Memory Time  S Time
-------------- -------- ----- -------- ------ --- --- ------ ----- - -----
${jobIdOrPlaceholder}[].pbs username quick job-name    --    1   4   32gb 01:00 Q   --`}
              />
              <InstructionText>
                Check the status of your array sub-jobs by running the following
                command:
              </InstructionText>
              <CommandBox
                command="qstat -Jtxu $USER"
                output={`pbs:
                                                       Req'd  Req'd   Elap
Job ID          Username Queue Jobname  SessID NDS TSK Memory Time  S Time
--------------- -------- ----- -------- ------ --- --- ------ ----- - -----
${jobIdOrPlaceholder}[0].pbs username quick job-name    --    1   4   32gb 01:00 Q   --
${jobIdOrPlaceholder}[1].pbs username quick job-name    --    1   4   32gb 01:00 Q   --
${jobIdOrPlaceholder}[2].pbs username quick job-name    --    1   4   32gb 01:00 Q   --
`}
              />
            </>
          )}
          <InstructionText>
            The job status will be shown in the <Code>S</Code> column.
          </InstructionText>
          <Table size="sm" variant="striped">
            <Thead>
              <Tr>
                <Th>Status</Th>
                <Th>Description</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>
                  <Text as="b">Q</Text>
                </Td>
                <Td>Queued</Td>
              </Tr>
              <Tr>
                <Td>
                  <Text as="b">R</Text>
                </Td>
                <Td>Running</Td>
              </Tr>
              <Tr>
                <Td>
                  <Text as="b">B</Text>
                </Td>
                <Td>
                  Parent of array job that has at least one subjob running, e.g
                  1234567[].pbs
                </Td>
              </Tr>
              <Tr>
                <Td>
                  <Text as="b">X</Text>
                </Td>
                <Td>
                  Subjob of array that has finished while other subjobs are
                  still running, e.g 1234567[1].pbs is in X state, while
                  1234567[2].pbs is still in R state.
                </Td>
              </Tr>
              <Tr>
                <Td>
                  <Text as="b">H</Text>
                </Td>
                <Td>Held</Td>
              </Tr>
              <Tr>
                <Td>
                  <Text as="b">S</Text>
                </Td>
                <Td>Suspended</Td>
              </Tr>
              <Tr>
                <Td>
                  <Text as="b">E</Text>
                </Td>
                <Td>Exiting</Td>
              </Tr>
              <Tr>
                <Td>
                  <Text as="b">F</Text>
                </Td>
                <Td>Finished</Td>
              </Tr>
            </Tbody>
          </Table>
          <InstructionHeading>Job results</InstructionHeading>
          <InstructionText>
            The output of the job will be saved in a file named{" "}
            <Code>
              {jobName}.o{jobIdOrPlaceholder}
            </Code>{" "}
            in the same directory that the job was submitted from.
          </InstructionText>
          <InstructionText>
            Run the following command to see the output files:
          </InstructionText>
          {jobInstanceType === "Standalone" && (
            <CommandBox
              command={`ls -lh ${jobName}.*`}
              output={[
                `-rw------- 1 username default 100 Jan 01 00:00 ${jobName}.e${jobIdOrPlaceholder}`,
                `-rw------- 1 username default  80 Jan 01 00:00 ${jobName}.o${jobIdOrPlaceholder}`,
              ].join("\n")}
            />
          )}
          {jobInstanceType === "Array" && (
            <CommandBox
              command={`ls -lh ${jobName}.*`}
              output={[
                `-rw------- 1 username default 100 Jan 01 00:00 ${jobName}.e${jobIdOrPlaceholder}.0`,
                `-rw------- 1 username default 100 Jan 01 00:00 ${jobName}.e${jobIdOrPlaceholder}.1`,
                `-rw------- 1 username default  80 Jan 01 00:00 ${jobName}.o${jobIdOrPlaceholder}.0`,
                `-rw------- 1 username default  80 Jan 01 00:00 ${jobName}.o${jobIdOrPlaceholder}.1`,
              ].join("\n")}
            />
          )}
          <InstructionText>
            Run the following command to see the output of the job:
          </InstructionText>
          {jobInstanceType === "Standalone" && (
            <CommandBox
              command={`cat ${jobName}.o${jobId || "*"}`}
              output={[
                `Running job 'job-name' (${jobIdOrPlaceholder}.pbs) in the following directory: /home/username`,
                `PBS Job ${jobIdOrPlaceholder}.pbs`,
                "CPU time  : 00:00:00",
                "Wall time : 00:00:01",
                "Mem usage : 0b",
              ].join("\n")}
            />
          )}
          {jobInstanceType === "Array" && (
            <CommandBox
              command={`cat ${jobName}.o${jobId || "*"}.*`}
              output={[
                `Running job 'job-name' (${jobIdOrPlaceholder}[0].pbs) in the following directory: /home/username`,
                `PBS Job ${jobIdOrPlaceholder}[1].pbs`,
                "CPU time  : 00:00:00",
                "Wall time : 00:00:01",
                "Mem usage : 0b",
                `Running job 'job-name' (${jobIdOrPlaceholder}[1].pbs) in the following directory: /home/username`,
                `PBS Job ${jobIdOrPlaceholder}[1].pbs`,
                "CPU time  : 00:00:00",
                "Wall time : 00:00:01",
                "Mem usage : 0b",
              ].join("\n")}
            />
          )}
          <InstructionText>
            Run the following command to see the error output of the job:
          </InstructionText>
          {jobInstanceType === "Standalone" && (
            <CommandBox
              command={`cat ${jobName}.e${jobId || "*"}`}
              output={`Data written to stderr`}
            />
          )}
          {jobInstanceType === "Array" && (
            <CommandBox
              command={`cat ${jobName}.e${jobId || "*"}.*`}
              output={["Data written to stderr", "Data written to stderr"].join(
                "\n",
              )}
            />
          )}
          <InstructionText>
            Use the following command to get more detailed information about the
            job, including resource usage.
          </InstructionText>
          <CommandBox
            command={`qstat -fx ${jobId || "{jobId}"}`}
            output={`Job Id: ${jobIdOrPlaceholder}.pbs
  ...
  resources_used.cpupercent = 99
  resources_used.cput = 00:39:22
  resources_used.mem = 5671036kb
  resources_used.ncpus = 1
  resources_used.vmem = 2755392kb
  resources_used.walltime = 00:40:51
  ...
  `}
          />
          <InstructionText>
            Observe the resource usage of the job and adjust the requested
            resources in future job submissions accordingly
          </InstructionText>
          <Table size="sm" my={4} variant="striped">
            <Thead>
              <Tr>
                <Th>Resource</Th>
                <Th>Description</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>
                  <Text as="b">cpupercent</Text>
                </Td>
                <Td>
                  Sum of the percentage of CPU time used by each requested cpu.
                  (eg. 75% of each of 4 cpus = 300)
                </Td>
              </Tr>
              <Tr>
                <Td>
                  <Text as="b">cput</Text>
                </Td>
                <Td>
                  Sum of the CPU time used by each requested core. (eg. 1 hour
                  using 4 cpus = 04:00:00)
                </Td>
              </Tr>
              <Tr>
                <Td>
                  <Text as="b">mem</Text>
                </Td>
                <Td>Maximum memory used by the job.</Td>
              </Tr>
              <Tr>
                <Td>
                  <Text as="b">ncpus</Text>
                </Td>
                <Td>Number of cpus used by the job.</Td>
              </Tr>
              <Tr>
                <Td>
                  <Text as="b">vmem</Text>
                </Td>
                <Td>Maximum virtual memory used by the job.</Td>
              </Tr>
              <Tr>
                <Td>
                  <Text as="b">walltime</Text>
                </Td>
                <Td>The time it took to run the job.</Td>
              </Tr>
            </Tbody>
          </Table>
        </>
      )}
    </>
  );
}
