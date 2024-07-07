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

export default function ConfigDuration({
  title,
  description,
  selected,
  onChange,
  value,
  inputPropsHour,
  inputPropsMinute,
  showAlert = false,
  alertDismissible = true,
  alertType = "info",
  alertMsg = "",
}) {
  const [alertDismissed, setAlertDismissed] = useState(false);
  const onClose = () => {
    setAlertDismissed(true);
  };

  return (
    <Box>
      <Flex direction="row" width="100%" align="center">
        <Box w="120px">
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
        <Square size="10px" />
        <Flex>
          <InputNumberStepper
            w="100px"
            label={value?.hour > 1 ? "hours" : "hour"}
            value={value?.hour}
            onChange={(newValue) => {
              onChange({
                ...value,
                hour: newValue,
              });
            }}
            {...inputPropsHour}
          />
          <InputNumberStepper
            w="100px"
            label={value?.minute > 1 ? "minutes" : "minute"}
            value={value?.minute}
            onChange={(newValue) => {
              onChange({
                ...value,
                minute: newValue,
              });
            }}
            {...inputPropsMinute}
          />
        </Flex>
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
    </Box>
  );
}
