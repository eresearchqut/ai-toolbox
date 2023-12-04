import InputPicker from './InputPicker'
import {useArgs} from "@storybook/preview-api";

export default {
    title: 'Inputs/InputPicker',
    component: InputPicker,
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
    args: {
        choices: ['Option A', 'Option B'],
        value: 'Option B',
    }
}

export const HuggingFace = {
    args: {
        choices: [
            ["Lyra", "QUT's HPC cluster"],
            ["JupyterHub", "JupyterHub on QUT's HPC cluster"],
            ["rVDI", "Research Virtual Desktop Infrastructure managed by QUT"],
            ["Local", "Your own workstation"]
        ],
        value: 'rVDI',
    }
}
