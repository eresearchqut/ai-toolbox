import { Alert, AlertIcon, Box, Code, Link, Text } from "@chakra-ui/react";

import CopyBox from "../../../output/CopyBox";
import InstructionHeading from "./components/InstructionHeading";
import InstructionText from "./components/InstructionText";
import { OperatingSystemTabs } from "./components/OperatingSystemTabs";

function LyraInstructions({ username }) {
  return (
    <>
      <InstructionHeading>Connect to Lyra</InstructionHeading>
      <Alert status="info">
        <AlertIcon />
        If you are off-campus, you will first need to connect to the QUT network
        using the VPN.
      </Alert>
      <InstructionText>
        See the instructions{" "}
        <Link
          href="https://qutvirtual4.qut.edu.au/group/research-students/conducting-research/specialty-research-facilities/advanced-research-computing-storage/supercomputing/getting-started-with-hpc"
          isExternal
          color="blue.500"
        >
          here
        </Link>{" "}
        for more information about how to use Lyra.
      </InstructionText>
      <OperatingSystemTabs>
        <Box>
          <Alert status="info">
            <AlertIcon />
            <Text mb="0">
              You may need to enable the{" "}
              <Link
                href="https://learn.microsoft.com/en-us/windows/terminal/tutorials/ssh"
                isExternal
                color="blue.500"
              >
                ssh feature
              </Link>{" "}
              in Windows.
            </Text>
          </Alert>
          <InstructionText>
            In Windows Terminal, Powershell, or cmd.exe, run the following
            command to connect to Lyra:
          </InstructionText>
        </Box>
        <Box>
          <InstructionText>
            In a terminal emulator, run the following command to connect to
            Lyra:
          </InstructionText>
        </Box>
        <Box>
          <InstructionText>
            In a terminal emulator, run the following command to connect to
            Lyra:
          </InstructionText>
        </Box>
      </OperatingSystemTabs>
      {username === "" && (
        <InstructionText>
          <i>
            Replace <Code>qutusername</Code> with your QUT username.
          </i>
        </InstructionText>
      )}
      <CopyBox>ssh {username || "qutusername"}@lyra.qut.edu.au</CopyBox>
    </>
  );
}

function JupyterHubInstructions() {
  return (
    <>
      <InstructionHeading>Connect to JupyterHub</InstructionHeading>
      <InstructionText>
        Visit{" "}
        <Link
          href="https://jupyterhub.eres.qut.edu.au"
          isExternal
          color="blue.500"
        >
          https://jupyterhub.eres.qut.edu.au
        </Link>{" "}
        and log in with your QUT username and password.
      </InstructionText>
    </>
  );
}

function RvdiInstructions() {
  return (
    <>
      <InstructionHeading>Connect to rVDI</InstructionHeading>
      <InstructionText>
        See the instructions{" "}
        <Link
          href="https://qutvirtual4.qut.edu.au/group/research-students/conducting-research/specialty-research-facilities/advanced-research-computing-storage/virtual-workstations"
          isExternal
          color="blue.500"
        >
          here
        </Link>{" "}
        for more information.
      </InstructionText>
      <InstructionText>
        If you have not already, download and install the VMware Horizon client
        from{" "}
        <Link href="https://rvdi.qut.edu.au" isExternal color="blue.500">
          https://rvdi.qut.edu.au
        </Link>
        .
      </InstructionText>
      <InstructionText>
        In the VMware Horizon client, connect to{" "}
        <Link href="https://rvdi.qut.edu.au" isExternal color="blue.500">
          rvdi.qut.edu.au
        </Link>{" "}
        and log in with your QUT username and password.
      </InstructionText>
    </>
  );
}

export function ConnectInstructions({ service, username }) {
  return (
    <>
      {service === "Lyra" && <LyraInstructions username={username} />}
      {service === "JupyterHub" && <JupyterHubInstructions />}
      {service === "rVDI" && <RvdiInstructions />}
      {service === "Local" && <></>} {/* No instructions needed */}
    </>
  );
}
