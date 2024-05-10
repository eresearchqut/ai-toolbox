import InstructionHeading from "./components/InstructionHeading";
import InstructionText from "./components/InstructionText";
import CopyBox from "../../../output/CopyBox";
import {Code, Link} from "@chakra-ui/react";

export function AccessInstructions({service, port, node, username}) {
    return <>
        {service === "Lyra" && <>
            <InstructionHeading>Forward the port</InstructionHeading>
            <InstructionText>
                In a new terminal window, run the following command to forward traffic from the server to your local machine:
            </InstructionText>
            {username === "" &&
                <InstructionText><i>Replace <Code>qutusername</Code> with your QUT username.</i></InstructionText>
            }
            {node === "" &&
                <InstructionText><i>Replace <Code>node</Code> with the name of the node the job is running on.</i></InstructionText>
            }
            <CopyBox>ssh -L {port}:{node || "node"}:{port} {username || "qutusername"}@lyra.qut.edu.au</CopyBox>
        </>}
        <InstructionHeading>Access the tool</InstructionHeading>
        <InstructionText>
            In your web browser, navigate to the following address: <Link href={`http://localhost:${port}`} isExternal color="blue.500">http://localhost:{port}</Link>
        </InstructionText>
        <CopyBox>
            http://localhost:{port}
        </CopyBox>
    </>;
}