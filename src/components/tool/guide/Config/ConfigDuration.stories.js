import ConfigDuration from "./ConfigDuration";
import {useState} from "react";
import {useArgs} from "@storybook/preview-api";

export default {
    title: 'Tools/Config/ConfigDuration',
    component: ConfigDuration,
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

export const Default = {
    args: {
        title: 'Duration',
        description: "Tooltip example",
        selected: false,
        value: { hour: 1, minute: 30 },
        inputPropsHour: { min: 1, max: 167,  step: 1 },
        inputPropsMinute: { min: 0, max: 59,  step: 1 },
    }
}

export const AlertDismissible = {
    args: {
        title: 'Duration Alert',
        description: "Second tooltip example",
        selected: true,
        value: { hour: 100, minute: 30 },
        inputPropsHour: { min: 1, max: 167,  step: 1 },
        inputPropsMinute: { min: 0, max: 59,  step: 1 },
        showAlert: true,
        alertDismissible: true,
        alertType: "warning",
        alertMsg: "This is a dismissible alert",
    }
}

export const AlertNonDismissible = {
    args: {
        title: 'Duration Alert Not Dismissible',
        description: "Third tooltip example",
        selected: false,
        value: { hour: 167, minute: 59 },
        inputPropsHour: { min: 1, max: 167,  step: 1 },
        inputPropsMinute: { min: 0, max: 59,  step: 1 },
        showAlert: true,
        alertDismissible: false,
        alertType: "error",
        alertMsg: "This is a non-dismissible alert",
    }
}

export const AlertByCondition = {
    args: {
        title: 'Duration Alert By Condition',
        description: "Fourth Tooltip example",
        selected: false,
        value: { hour: 50, minute: 25 },
        inputPropsHour: { min: 1, max: 167,  step: 1 },
        inputPropsMinute: { min: 0, max: 59,  step: 1 },
        showAlert: false,
        alertType: "success",
        alertMsg: "This is a conditional alert when hours to greater than 30.",
        alertDismissible: true,
    },
    decorators: [
        (Story) => {
            const [args, setArgs] = useArgs();
            const onChange = (value) => {
                setArgs({value, showAlert: value.hour > 30});
            };
            return <Story args={{...args, onChange}}/>;
        },
    ]
}
