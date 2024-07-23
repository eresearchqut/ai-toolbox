import { Alert, AlertIcon, Box, CloseButton, Flex } from "@chakra-ui/react";

export default function AlertHelper({
  alertDismissible = true,
  alertType = "info",
  alertMsg = null,
  onClose = {},
  children = null,
}) {
  return (
    <>
      <Box></Box>
      <Flex direction="row" align="center">
        <Box w="100%">
          <Alert display="flex" status={alertType}>
            <AlertIcon />
            {children
              ? children
              : alertMsg && typeof alertMsg === "function"
                ? alertMsg()
                : `${alertMsg}`}
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
        </Box>
      </Flex>
    </>
  );
}
