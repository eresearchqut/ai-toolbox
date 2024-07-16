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

import InputNumberStepper from "../../../input/InputNumberStepper";

export default function ConfigMultipleNumbers({
  title,
  description,
  selected,
  value = {},
  onChange,
  inputProps,
  showAlert = false,
  alertDismissible = true,
  alertType = "info",
  alertMsg = "",
}) {
  const [alertDismissed, setAlertDismissed] = useState(false);
  const onClose = () => {
    setAlertDismissed(true);
  };
  const keyToReadable = (key) => {
    return key
      .replace(/([A-Z])/g, " $1") // Add a space before each uppercase letter
      .replace(/^./, (char) => char.toUpperCase()); // Capitalize the first letter
  };
  return (
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
      <Flex justifyContent="flex-start">
        {Object.keys(value).map((key, index) => (
          <InputNumberStepper
            key={key}
            w="100px"
            label={keyToReadable(key)}
            value={value[key]}
            onChange={(newValue) => {
              onChange({
                ...value,
                [key]: parseInt(newValue),
              });
            }}
            {...(Array.isArray(inputProps) ? inputProps[index] : inputProps)}
          />
        ))}
      </Flex>
      {showAlert && !alertDismissed && (
        <Flex direction="row" align="center">
          <Box minWidth="120px" />
          <Square size="10px"></Square>
          <Box w="100%">
            <Alert display="flex" status={alertType}>
              <AlertIcon />
              {alertMsg}
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
      )}
    </>
  );
}
