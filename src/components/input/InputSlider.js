import {
  Box,
  Flex,
  Input,
  InputGroup,
  InputRightAddon,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Text,
} from "@chakra-ui/react";

import { useGuideContext } from "../tool/guide/Guide";

export default function InputSlider({
  value = 1,
  label,
  onChange = () => {},
  ...props
}) {
  const { colorScheme } = useGuideContext();

  return (
    <Flex>
      <Box width="120px">
        <InputGroup size="sm">
          <Input
            type="number"
            value={value}
            onChange={(e) => onChange(parseInt(e.target.value))}
            textAlign="center"
          />
          <InputRightAddon width="60px" p={0} justifyContent="center">
            <Text mb="0">{label}</Text>
          </InputRightAddon>
        </InputGroup>
      </Box>
      <Slider
        display="block"
        flex="1"
        ml={2}
        value={value}
        focusThumbOnChange={false}
        colorScheme={colorScheme}
        onChange={(v) => onChange(v)}
        {...props}
      >
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>

        <SliderThumb />
      </Slider>
    </Flex>
  );
}
