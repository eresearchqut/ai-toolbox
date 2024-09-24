import { Box, Heading, useColorModeValue } from "@chakra-ui/react";

import PreformattedBox from "./PreformattedBox";

function Header({ children }) {
  return (
    <Heading
      size="xs"
      border="1px"
      backgroundColor={useColorModeValue("gray.100", "gray.800")}
      borderColor={useColorModeValue("gray.200", "gray.500")}
      // override docusaurus styling
      m="0"
      p="2"
    >
      {children}
    </Heading>
  );
}

export default function CommandBox({ command, output, editable }) {
  return (
    <Box border="1px" borderColor="gray.200" rounded="md" overflow="hidden">
      <Box>
        <Header>Command</Header>
        <PreformattedBox
          editable={editable}
          type="input"
          contentProps={{
            ariaLabel: "Command text",
            rounded: "",
            ...(!output && { borderBottomRadius: "md" }),

            // override docusaurus styling
            borderRadius: "0",
            mb: 0,
          }}
        >
          {command}
        </PreformattedBox>
      </Box>
      {output && (
        <Box>
          <Header>Output</Header>
          <PreformattedBox
            editable={editable}
            type="output"
            wrap={false}
            contentProps={{
              ariaLabel: "Output text",
              rounded: "",
              borderBottomRadius: "md",

              // override docusaurus styling
              borderRadius: "0",
              mb: 0,
            }}
          >
            {output}
          </PreformattedBox>
        </Box>
      )}
    </Box>
  );
}
