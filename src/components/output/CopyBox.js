import React, {useState} from "react";
import {Box, Button, Tooltip} from "@chakra-ui/react";
import {CopyIcon} from "@chakra-ui/icons";

export default function CopyBox({children}) {
    const [hover, setHover] = useState(false);
    const [copied, setCopied] = useState(false);

    return (
        <Box
            as="pre"
            p="4"
            rounded="md"
            border="1px"
            borderColor="gray.200"
            bg="gray.50"
            fontSize="sm"
            whiteSpace="pre-wrap"
            wordBreak="break-all"
            w="full"
            onMouseOver={() => setHover(true)}
            onMouseOut={() => setHover(false)}
            position="relative"
        >
            {children}
            {
                hover &&
                <Tooltip label={copied ? "Copied!" : "Copy to clipboard"} placement="top" closeDelay={500}>
                    <Button
                        position="absolute"
                        right="2"
                        top="2"
                        size="sm"
                        onClick={() => {
                            navigator.clipboard.writeText(children);
                            setCopied(true)
                            setTimeout(() => setCopied(false), 1000);
                        }}
                        colorScheme={copied ? "green" : "gray"}
                    >
                        <CopyIcon/>
                    </Button>
                </Tooltip>
            }
        </Box>
    )
}