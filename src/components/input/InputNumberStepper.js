import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  InputGroup,
  InputRightAddon,
} from "@chakra-ui/react";

import React from "react";

import { useGuideContext } from "../tool/guide/Guide";

export default function InputNumberStepper({
  value = 1,
  label,
  onChange = () => {},
  ...props
}) {
  const { colorScheme } = useGuideContext();

  return (
    <>
      <InputGroup>
        <NumberInput
          defaultValue={value}
          onChange={onChange}
          colorScheme={colorScheme}
          {...props}
        >
          <NumberInputField focusBorderColor="red.200" />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
        <InputRightAddon>{label}</InputRightAddon>
      </InputGroup>
    </>
  );
}
