import {
    Box, Center, Flex,
    Input,
    InputGroup, InputRightAddon,
    Slider,
    SliderFilledTrack,
    SliderMark,
    SliderThumb,
    SliderTrack,
    Text,
    Tooltip
} from "@chakra-ui/react";
import {useEffect, useState} from "react";

export default function InputSlider({value = 1, label, onChange = () => {}, ...props}) {
    const [sliderValue, setSliderValue] = useState(value)

    useEffect(() => {
        setSliderValue(value);
    }, [value]);
    const changeFn = (v) => {
        setSliderValue(v);
        onChange(v);
    }

    return (
        <>
            <Box width="120px">
                <InputGroup size='sm'>
                    <Input
                        type="number"
                        value={sliderValue}
                        onChange={(e) => changeFn(parseInt(e.target.value))}
                        textAlign="center"
                    />
                    <InputRightAddon width="60px" p={0} justifyContent="center">
                        <Text mb="0">
                            {label}
                        </Text>
                    </InputRightAddon>
                </InputGroup>
            </Box>
            <Slider
                display='block'
                flex='1'
                defaultValue={value}
                ml={2}
                value={sliderValue}
                focusThumbOnChange={false}
                colorScheme='yellow'
                onChange={(v) => changeFn(v)}
                {...props}
            >
                <SliderTrack>
                    <SliderFilledTrack/>
                </SliderTrack>

                <SliderThumb/>
            </Slider>
        </>
    )
}