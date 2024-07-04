import { Box } from "@chakra-ui/react";

import useLocalStorageState from "../../../hooks/useLocalStorageState";
import { ConnectInstructions } from "../Instructions/ConnectInstructions";
import InstructionInput from "../Instructions/InstructionInput";
import {
  JupyterHubStartInstructions,
  LocalStartInstructions,
  LyraStartInstructions,
  RvdiStartInstructions,
} from "../Instructions/StartInstructions";
import { TeardownInstructions } from "../Instructions/TeardownInstructions";

const TEXT_PATTERN = /^[a-z0-9]*$/;
const JOB_NAME_PATTERN = /^(?=.*[A-Za-z0-9._+-])[A-Za-z0-9._+-]+$/;

export function EresearchInstructions({ config }) {
  const [username, setUsername] = useLocalStorageState(
    "qutUsername",
    "qutusername",
  );
  const [batchJobName, setBatchJobName] = useLocalStorageState(
    "qutBatchJobName",
    "Batch-job-name",
  );

  return (
    <Box>
      {config.service === "Lyra" && (
        <>
          <InstructionInput
            label="QUT Username"
            placeholder="username"
            value={username}
            onChange={setUsername}
            pattern={TEXT_PATTERN}
            helperText="Optionally enter your QUT username so that it can be pre-populated in the commands below."
            errorText="Username must only contain lowercase letters and numbers"
          />
          {config.jobType === "Batch" && (
            <InstructionInput
              label="Batch Job Name"
              placeholder="Batch-job-name"
              value={batchJobName}
              onChange={setBatchJobName}
              pattern={JOB_NAME_PATTERN}
              helperText="Please enter your batch job name so that it can be pre-populated in the commands below."
              errorText="Job name must only contain alphanumerics or '-', '_', '+', '.' and must not be empty."
            />
          )}
        </>
      )}
      {batchJobName && (
        <ConnectInstructions service={config.service} username={username} />
      )}
      {config.service === "Lyra" && (
        <>
          {batchJobName && (
            <LyraStartInstructions
              jobType={config.jobType}
              jobName={batchJobName}
              hardware={config.hardware}
              cpuVendor={config.cpuVendor}
              cpuModel={config.cpuModel}
              cpuCores={config.cpuCores}
              ram={config.ram}
              gpuVendor={config.gpuVendor}
              gpuModel={config.gpuModel}
              gpuModules={config.gpuModules}
              nodes={config.nodes}
            />
          )}
        </>
      )}
      {config.service === "JupyterHub" && (
        <JupyterHubStartInstructions jobProfile={config.jobProfile} />
      )}
      {config.service === "rVDI" && (
        <RvdiStartInstructions hardware={config.hardware} os={config.os} />
      )}
      {config.service === "Local" && (
        <LocalStartInstructions hardware={config.hardware} os={config.os} />
      )}
      {batchJobName && (
        <TeardownInstructions
          service={config.service}
          jobType={config.jobType}
          environment={config.environment}
        />
      )}
    </Box>
  );
}
