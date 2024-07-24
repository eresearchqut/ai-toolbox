import { Flex } from "@chakra-ui/react";

import { useState } from "react";

import InputNumberStepper from "../../../input/InputNumberStepper";
import AlertHelper from "./AlertHelper";
import ConfigHeader from "./ConfigHeader";

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
      <ConfigHeader
        title={title}
        description={description}
        selected={selected}
      />
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
        <AlertHelper
          alertDismissible={alertDismissible}
          alertType={alertType}
          onClose={onClose}
        >
          {alertMsg}
        </AlertHelper>
      )}
    </>
  );
}
