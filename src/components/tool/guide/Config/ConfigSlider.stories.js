import { useArgs } from "@storybook/preview-api";

import ConfigSlider from "./ConfigSlider";

export default {
  title: "Tools/Config/ConfigSlider",
  component: ConfigSlider,
  decorators: [
    (Story) => {
      const [args, setArgs] = useArgs();
      const onChange = (value) => {
        setArgs({
          ...args,
          inputProps: {
            ...args.inputProps,
            value: parseInt(value),
          },
        });
      };

      return <Story args={{ ...args, onChange }} />;
    },
  ],
};

export const Simple = {
  args: {
    title: "Simple Slider",
    description: "Tooltip example",
    selected: true,
    inputProps: {
      label: "Label",
    },
  },
};

export const Range0to50 = {
  args: {
    title: "Slider range 0 to 50",
    description: "Tooltip example",
    selected: true,
    inputProps: {
      label: "Label",
      value: 1,
      min: 0,
      max: 50,
    },
  },
};

export const Range50to200WithStep2 = {
  args: {
    title: "Slider range 0 - 200 & steps 2",
    description: "Tooltip example",
    selected: true,
    inputProps: {
      label: "Label",
      value: 50,
      min: 50,
      max: 200,
      step: 2,
    },
  },
};

export const Range1to200WithAlert = {
  args: {
    title: "Slider with alert",
    description: "Tooltip example",
    selected: true,
    inputProps: {
      label: "Label",
      value: 100,
      min: 1,
      max: 200,
    },
    showAlert: true,
    alertDismissible: false,
    alertType: "info",
    alertMsg: "This is an info alert",
  },
};

export const DismissibleAlert = {
  args: {
    title: "Slider with alert",
    description: "Tooltip example",
    selected: true,
    inputProps: {
      label: "Label",
    },
    showAlert: true,
    alertDismissible: true,
    alertType: "warning",
    alertMsg: "This is a dismissible warning alert",
  },
};
