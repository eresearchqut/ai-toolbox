import {Box, Link, List, ListItem, UnorderedList} from "@chakra-ui/react";
import React from "react";
import {ArrowForwardIcon} from "@chakra-ui/icons";

export function PresetSection({presets, onPresetChange}) {
    return (
        <Box>
            <UnorderedList p='0'>
                {presets.map((p, i) => (
                    <ListItem key={i} onClick={() => onPresetChange(p)}>
                        <Link>{p.name} <ArrowForwardIcon mx="2px"/></Link>
                    </ListItem>
                ))}
            </UnorderedList>
        </Box>
    )
}