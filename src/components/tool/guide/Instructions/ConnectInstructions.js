import { Box, Code } from "@chakra-ui/react";

import TextWithLink from "../../../navigation/TextWithLink";
import CopyBox from "../../../output/CopyBox";
import AlertHelper from "../Config/AlertHelper";
import InstructionHeading from "./components/InstructionHeading";
import InstructionText from "./components/InstructionText";
import { OperatingSystemTabs } from "./components/OperatingSystemTabs";

function LyraInstructions({ username }) {
  return (
    <>
      <InstructionHeading>Connect to Lyra</InstructionHeading>
      <AlertHelper alertType="info" alertDismissible={false}>
        {
          "If you are off-campus, you will first need to connect to the QUT network using the VPN."
        }
      </AlertHelper>
      <InstructionText>
        <TextWithLink
          textBeforeLink={"See the instructions "}
          link={{
            href: "https://qutvirtual4.qut.edu.au/group/research-students/conducting-research/specialty-research-facilities/advanced-research-computing-storage/supercomputing/getting-started-with-hpc",
            text: "here",
            color: "blue.500",
            isExternal: true,
          }}
          textAfterLink={" for more information about how to use Lyra."}
        />
      </InstructionText>
      <OperatingSystemTabs>
        <Box>
          <AlertHelper alertType={"info"} alertDismissible={false}>
            <TextWithLink
              textBeforeLink={"You may need to enable the "}
              link={{
                href: "https://learn.microsoft.com/en-us/windows/terminal/tutorials/ssh",
                text: "ssh feature",
                color: "blue.500",
                isExternal: true,
              }}
              hasExternalIcon={false}
              textAfterLink={" in Windows."}
            />
          </AlertHelper>
          <InstructionText>
            <TextWithLink
              textBeforeLink={"In "}
              link={{
                href: "https://aka.ms/terminal",
                text: "Windows Terminal",
                color: "blue.500",
                isExternal: true,
              }}
            />
            <TextWithLink
              textBeforeLink={", Powershell, "}
              link={{
                href: "https://www.putty.org/",
                text: "PuTTY",
                color: "blue.500",
                isExternal: true,
              }}
              textAfterLink={
                ", or cmd.exe, run the following command to connect to Lyra:"
              }
            />
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
            Replace <Code>username</Code> with your QUT username.
          </i>
        </InstructionText>
      )}
      <CopyBox>ssh {username || "username"}@lyra.qut.edu.au</CopyBox>
    </>
  );
}

function JupyterHubInstructions() {
  return (
    <>
      <InstructionHeading>Connect to JupyterHub</InstructionHeading>
      <InstructionText>
        <TextWithLink
          textBeforeLink={"Visit "}
          link={{
            href: "https://jupyterhub.eres.qut.edu.au",
            text: "https://jupyterhub.eres.qut.edu.au",
            color: "blue.500",
            isExternal: true,
          }}
          textAfterLink={" and log in with your QUT username and password."}
        />
      </InstructionText>
    </>
  );
}

function RvdiInstructions() {
  return (
    <>
      <InstructionHeading>Connect to rVDI</InstructionHeading>
      <InstructionText>
        <TextWithLink
          textBeforeLink={"See the instructions "}
          link={{
            href: "https://qutvirtual4.qut.edu.au/group/research-students/conducting-research/specialty-research-facilities/advanced-research-computing-storage/virtual-workstations",
            text: "here",
            color: "blue.500",
            isExternal: true,
          }}
          textAfterLink={" for more information."}
        />
      </InstructionText>
      <InstructionText>
        <TextWithLink
          textBeforeLink={
            "If you have not already, download and install the VMware Horizon client from "
          }
          link={{
            href: "https://rvdi.qut.edu.au",
            text: "https://rvdi.qut.edu.au",
            color: "blue.500",
            isExternal: true,
          }}
          textAfterLink={"."}
        />
      </InstructionText>
      <InstructionText>
        <TextWithLink
          textBeforeLink={"In the VMware Horizon client, connect to "}
          link={{
            href: "https://rvdi.qut.edu.au",
            text: "https://rvdi.qut.edu.au",
            color: "blue.500",
            isExternal: true,
          }}
          textAfterLink={" and log in with your QUT username and password."}
        />
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
