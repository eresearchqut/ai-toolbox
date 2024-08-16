import { Button, Flex, Tooltip } from "@chakra-ui/react";

import { useGuideContext } from "../tool/guide/Guide";

export default function InputPicker({ choices, value, onChange = (_) => {} }) {
  const { colorScheme } = useGuideContext();

  return (
    <Flex flexGrow="1">
      {choices?.map((choice) => {
        const { label, description } = Array.isArray(choice)
          ? { label: choice[0], description: choice[1] }
          : { label: choice, description: "" };
        const selected = label === value;

        return (
          <Tooltip
            key={label}
            label={description}
            flexGrow="1"
            placement="top"
            hasArrow
          >
            <Button
              flex="1"
              variant={selected ? "solid" : "outline"}
              size="sm"
              borderRadius="0"
              m="0"
              p="0"
              onClick={() => onChange(label)}
              colorScheme={selected ? colorScheme : "gray"}
            >
              {label}
            </Button>
          </Tooltip>
        );
      })}
    </Flex>
  );
}
