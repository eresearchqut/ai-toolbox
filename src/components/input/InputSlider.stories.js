import InputSlider from "./InputSlider";
import {useArgs} from "@storybook/preview-api";

export default {
    title: 'Inputs/InputSlider',
    component: InputSlider,
    decorators: [
        (Story) => {
            const [args, setArgs] = useArgs();
            const onChange = (value) => {
                setArgs({value});
            };
            return <Story args={{...args, onChange}}/>;
        },
    ]
}

export const Simple = {
    args: {}
}