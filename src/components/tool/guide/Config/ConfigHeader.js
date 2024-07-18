import { CheckCircleIcon, WarningIcon } from "@chakra-ui/icons";
import { Box, Heading, Tooltip } from "@chakra-ui/react";

export default function ConfigHeader({ title, description, selected }) {
  return (
    <Box>
      {selected ? (
        <CheckCircleIcon color="green.500" />
      ) : (
        <Tooltip label="Pick an option">
          <WarningIcon color="orange.500" />
        </Tooltip>
      )}
      <Tooltip label={description} placement="top" hasArrow>
        <Heading size="xs" mb="0" display="inline" ml="2">
          {title}
        </Heading>
      </Tooltip>
    </Box>
  );
}
