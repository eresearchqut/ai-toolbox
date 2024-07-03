import {Box} from "@chakra-ui/react";
import {ConnectInstructions} from "../Instructions/ConnectInstructions";
import {
    JupyterHubStartInstructions,
    LocalStartInstructions,
    LyraStartInstructions,
    RvdiStartInstructions
} from "../Instructions/StartInstructions";
import {TeardownInstructions} from "../Instructions/TeardownInstructions";
import useLocalStorageState from "../../../hooks/useLocalStorageState";
import React from "react";
import InstructionInput from "../Instructions/InstructionInput";

const TEXT_PATTERN = /^[a-z0-9]*$/;


export function EresearchInstructions({config}) {
    const [username, setUsername] = useLocalStorageState("qutUsername", "qutusername");

    return <Box>
        {config.service === "Lyra" &&
            <InstructionInput
                label="QUT Username"
                placeholder="username"
                value={username}
                onChange={setUsername}
                pattern={TEXT_PATTERN}
                helperText="Optionally enter your QUT username so that it can be pre-populated in the commands below."
                errorText="Username must only contain lowercase letters and numbers"
            />
        }
        <ConnectInstructions
            service={config.service}
            username={username}
        />
        {config.service === "Lyra" &&
            <>
                <LyraStartInstructions
                    jobType={config.jobType}
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
            </>
        }
        {config.service === "JupyterHub" && <JupyterHubStartInstructions
            jobProfile={config.jobProfile}
        />}
        {config.service === "rVDI" && <RvdiStartInstructions
            hardware={config.hardware}
            os={config.os}
        />}
        {config.service === "Local" && <LocalStartInstructions
            hardware={config.hardware}
            os={config.os}
        />}
        <TeardownInstructions
            service={config.service}
            jobType={config.jobType}
            environment={config.environment}
        />
    </Box>
}