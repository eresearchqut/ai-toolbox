import { CopyIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Tooltip,
  Editable,
  EditableTextarea,
  EditablePreview,
  useColorModeValue,
} from "@chakra-ui/react";

import { useState } from "react";

export default function CopyBox({ children, editable = false }) {
  const [hover, setHover] = useState(false);
  const [copied, setCopied] = useState(false);

  const borderColor = useColorModeValue("gray.200", "gray.500");
  const bg = useColorModeValue("gray.50", "gray.800");

  const Wrapper = editable ? Editable : Box;

  const text = Array.isArray(children) ? children.join("") : children;
  return (
    <Wrapper
      as="pre"
      p="4"
      rounded="md"
      border="1px"
      borderColor={borderColor}
      bg={bg}
      fontSize="sm"
      whiteSpace="pre-wrap"
      wordBreak="break-all"
      w="full"
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
      position="relative"
      defaultValue={text}
    >
      {editable ? (
        <>
          <EditablePreview />
          <EditableTextarea />
        </>
      ) : (
        text
      )}
      {hover && (
        <Tooltip
          label={copied ? "Copied!" : "Copy to clipboard"}
          placement="top"
          closeDelay={500}
        >
          <Button
            position="absolute"
            right="2"
            top="2"
            size="sm"
            onClick={() => {
              navigator.clipboard.writeText(text);
              setCopied(true);
              setTimeout(() => setCopied(false), 1000);
            }}
            colorScheme={copied ? "green" : "gray"}
          >
            <CopyIcon />
          </Button>
        </Tooltip>
      )}
    </Wrapper>
  );
}
