import {Heading} from "@chakra-ui/react";

export default function InstructionHeading({children}) {
    return <Heading as='h3' size='sm' my={4}>{children}</Heading>
}