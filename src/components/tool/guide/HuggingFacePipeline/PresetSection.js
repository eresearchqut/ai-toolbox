import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, Link, ListItem, UnorderedList } from "@chakra-ui/react";

export function PresetSection({ presets, onPresetChange }) {
  return (
    <Box>
      <UnorderedList p="0">
        {presets.map((p, i) => (
          <ListItem key={i} onClick={() => onPresetChange(p)}>
            <Link>
              {p.name} <ArrowForwardIcon mx="2px" />
            </Link>
          </ListItem>
        ))}
      </UnorderedList>
    </Box>
  );
}
