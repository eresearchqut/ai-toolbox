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

import { useEffect, useState } from "react";

export default function CopyBox({
  children,
  editable = false,
  defaultRows = 10,
  wrap = true,
}) {
  const [hover, setHover] = useState(false);
  const [copied, setCopied] = useState(false);

  const borderColor = useColorModeValue("gray.200", "gray.500");
  const bg = useColorModeValue("gray.50", "gray.800");
  const wrapStyle = { textWrap: wrap ? "wrap" : "nowrap" };

  const Content = editable ? Editable : Box;

  const [text, setText] = useState(
    Array.isArray(children) ? children.join("") : children,
  );

  useEffect(() => {
    setText(Array.isArray(children) ? children.join("") : children);
  }, [children]);

  return (
    <Box
      position="relative"
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
    >
      <Content
        as="pre"
        p="4"
        rounded="md"
        border="1px"
        borderColor={borderColor}
        bg={bg}
        fontSize="sm"
        whiteSpace="pre-wrap"
        wordBreak="break-all"
        overflowX="auto"
        w="full"
        defaultValue={text}
        key={text}
        onSubmit={(e) => setText(e)}
        sx={wrapStyle}
      >
        {editable ? (
          <>
            <EditablePreview />
            <EditableTextarea rows={defaultRows} sx={wrapStyle} />
          </>
        ) : (
          text
        )}
      </Content>
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
    </Box>
  );
}
