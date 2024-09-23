import { Code, Table, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react";

import { useState } from "react";

import CopyBox from "../../../output/CopyBox";
import InstructionInput from "./InstructionInput";
import InstructionHeading from "./components/InstructionHeading";
import InstructionText from "./components/InstructionText";

export function LyraStatusInstructions({ jobType, jobName }) {
  const [jobId, setJobId] = useState("");
  const jobIdOrPlaceholder = jobId || "1234567";
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
          <InstructionText>
            You can check the status of your jobs by running the following
            command:
          </InstructionText>
          <CopyBox>qstat -xu $USER</CopyBox>
          <InstructionText>
            The output will look similar to the following:
          </InstructionText>
          <CopyBox wrap={false}>
            {`pbs: 
                                                   Req'd  Req'd   Elap
Job ID      Username Queue Jobname  SessID NDS TSK Memory Time  S Time
----------- -------- ----- -------- ------ --- --- ------ ----- - -----
1234567.pbs username quick job-name    --    1   4   32gb 01:00 Q   --`}
          </CopyBox>
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
                <Td>Array job has at least one subjob running</Td>
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
          <CopyBox wrap={false}>
            {`$ ls
${jobName}.e${jobIdOrPlaceholder}  ${jobName}.o${jobIdOrPlaceholder}

$ cat ${jobName}.o${jobIdOrPlaceholder}
Hello, world!
PBS Job ${jobIdOrPlaceholder}.pbs
CPU time  : 00:00:00
Wall time : 00:00:01
Mem usage : 0b

$ cat ${jobName}.e${jobIdOrPlaceholder}
Data written to stderr`}
          </CopyBox>
          <InstructionText>
            Use the following command to get more detailed information about the
            job, including resource usage.
          </InstructionText>
          <CopyBox>{`qstat -fx ${jobIdOrPlaceholder}`}</CopyBox>
          <InstructionText>
            Observe the resource usage of the job and adjust the requested
            resources in future job submissions accordingly. The output will
            look similar to the following:
          </InstructionText>
          <CopyBox wrap={false}>
            {`$ qstat -fx ${jobIdOrPlaceholder}
Job Id: ${jobIdOrPlaceholder}.pbs
    ...
    resources_used.cpupercent = 99
    resources_used.cput = 00:39:22
    resources_used.mem = 5671036kb
    resources_used.ncpus = 1
    resources_used.vmem = 2755392kb
    resources_used.walltime = 00:40:51
    ...`}
          </CopyBox>
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
                  Sum of the percentage of CPU time used by each requested core.
                  (eg. 75% of each of 4 cores = 300)
                </Td>
              </Tr>
              <Tr>
                <Td>
                  <Text as="b">cput</Text>
                </Td>
                <Td>
                  Sum of the CPU time used by each requested core. (eg. 1 hour
                  using 4 cores = 04:00:00)
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
                <Td>Number of cores used by the job.</Td>
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
