import {useEffect, useState} from "react";
import {
    FormControl,
    FormErrorMessage,
    FormHelperText,
    FormLabel,
    Input,
    InputGroup,
    InputRightElement
} from "@chakra-ui/react";
import InstructionHeading from "./components/InstructionHeading";
import {CheckIcon} from "@chakra-ui/icons";
export default function InstructionInput({label, placeholder, value, onChange, pattern, helperText, errorText}) {
    const [text, setText] = useState(value);
    const [valid, setValid] = useState(true);

    useEffect(() => {
        setValid(pattern.test(value));
        setText(value);
    }, [value]);

    const changeEvent = (e) => {
        setText(e.target.value);
        onChange(e.target.value);
    };

    return <FormControl isInvalid={!valid}>
        <FormLabel>
            <InstructionHeading>{label}</InstructionHeading>
        </FormLabel>
        <InputGroup>
            <Input
                type="text"
                placeholder={placeholder}
                value={text}
                onChange={changeEvent}
                pattern={pattern}
            />
            {valid && value !== "" && <InputRightElement children={<CheckIcon color="green.500"/>}/>}
        </InputGroup>
        {!valid &&
            <FormErrorMessage>{errorText}</FormErrorMessage>
        }
        <FormHelperText>{helperText}</FormHelperText>
    </FormControl>
}