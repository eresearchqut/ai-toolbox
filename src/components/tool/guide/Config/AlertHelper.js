import { Alert, AlertIcon, Box, CloseButton, Flex } from "@chakra-ui/react";

export default function AlertHelper({
  alertDismissible = true,
  alertType = "info",
  onClose = {},
  children = null,
}) {
  return (
    <>
      <Box></Box>
      <Alert display="flex" status={alertType}>
        <AlertIcon />
        <Box flex="1">{children}</Box>
        {alertDismissible && (
          <CloseButton
            size="sm"
            style={{ marginLeft: "auto" }}
            position="relative"
            right="0"
            top="0"
            onClick={onClose}
          />
        )}
      </Alert>
    </>
  );
}
