import { Box, Text } from "@chakra-ui/react";

export default function InstructionText({ children }) {
  return typeof children === "string" ? (
    <Text my={4}>{children}</Text>
  ) : (
    <Box my={4}>{children}</Box>
  );
}
