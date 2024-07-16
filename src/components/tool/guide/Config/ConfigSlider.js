import { CheckCircleIcon, WarningIcon } from "@chakra-ui/icons";
import {
  Alert,
  AlertIcon,
  Box,
  CloseButton,
  Flex,
  Heading,
  Square,
  Tooltip,
} from "@chakra-ui/react";

import { useState } from "react";

import InputSlider from "../../../input/InputSlider";

export default function ConfigSlider({
  title,
  description,
  selected,
  inputProps,
  onChange = {},
  showAlert = false,
  alertDismissible = true,
  alertType = "info",
  alertMsg = null,
}) {
  const [alertDismissed, setAlertDismissed] = useState(false);
  const onClose = () => {
    setAlertDismissed(true);
  };

  return (
    <>
      <>
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
        <InputSlider onChange={onChange} {...inputProps} />
      </>
      {showAlert && !alertDismissed && (
        <>
          <Box></Box>
          <Flex direction="row" align="center">
            <Box w="100%">
              <Alert display="flex" status={alertType}>
                <AlertIcon />
                {alertMsg && typeof alertMsg === "function"
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
      )}
    </>
  );
}
