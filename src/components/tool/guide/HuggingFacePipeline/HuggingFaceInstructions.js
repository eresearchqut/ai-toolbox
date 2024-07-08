import {
  AbsoluteCenter,
  Box,
  Divider,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";

import { useState } from "react";

import useLocalStorageState from "../../../hooks/useLocalStorageState";
import { AccessInstructions } from "../Instructions/AccessInstructions";
import { ConnectInstructions } from "../Instructions/ConnectInstructions";
import { InstallInstructions } from "../Instructions/InstallInstructions";
import InstructionInput from "../Instructions/InstructionInput";
import { RunInstructions } from "../Instructions/RunInstructions";
import {
  JupyterHubStartInstructions,
  LocalStartInstructions,
  LyraStartInstructions,
  RvdiStartInstructions,
} from "../Instructions/StartInstructions";
import { TeardownInstructions } from "../Instructions/TeardownInstructions";

const TEXT_PATTERN = /^[a-z0-9]*$/;

export function HuggingFaceInstructions({ task, model, config, port }) {
  const [username, setUsername] = useLocalStorageState(
    "qutUsername",
    "qutusername",
  );
  const [node, setNode] = useState("");

  return (
    <Box>
      {config.service === "Lyra" && (
        <InstructionInput
          label="QUT Username"
          placeholder="username"
          value={username}
          onChange={setUsername}
          pattern={TEXT_PATTERN}
          helperText="Optionally enter your QUT username so that it can be pre-populated in the commands below."
          errorText="Username must only contain lowercase letters and numbers"
        />
      )}
      <ConnectInstructions service={config.service} username={username} />
      {config.service === "Lyra" && (
        <>
          <LyraStartInstructions
            jobType={"Interactive"}
            hardware={config.hardware}
            cpuVendor={config.cpuVendor}
            cpuModel={config.cpuModel}
            cpuCores={config.cpuCores}
            ram={config.ram}
            gpuVendor={config.gpuVendor}
            gpuModel={config.gpuModel}
            gpuModules={config.gpuModules}
            wallTime={config.wallTime}
          />
          <InstructionInput
            label="Node name"
            placeholder="node"
            value={node}
            onChange={setNode}
            pattern={TEXT_PATTERN}
            helperText="Optionally enter the name of the node so that it can be pre-populated in the commands below."
            errorText="Node name must only contain lowercase letters and numbers"
          />
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
      <InstallInstructions
        hardware={config.hardware}
        gpuVendor={config.gpuVendor}
        service={config.service}
        tool={config.tool}
        environment={config.environment}
      />
      <RunInstructions
        service={config.service}
        tool={config.tool}
        task={task}
        model={model}
        port={port}
      />
      <AccessInstructions
        service={config.service}
        port={port}
        node={node}
        username={username}
      />
      <Box position="relative" padding="10">
        <Divider />
        <AbsoluteCenter bg={useColorModeValue("white", "gray.700")} px="4">
          <Heading as="h2" size="md" my={4}>
            Teardown steps
          </Heading>
        </AbsoluteCenter>
      </Box>
      <TeardownInstructions
        service={config.service}
        environment={config.environment}
        usingTool
      />
    </Box>
  );
}
