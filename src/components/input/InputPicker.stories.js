import InputPicker from './InputPicker'

export default {
    title: 'Inputs/InputPicker',
    component: InputPicker,
}

export const Simple = {
    args: {
        choices: ['Option A', 'Option B'],
        selected: 'Option B',
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
        selected: 'rVDI',
    }
}
