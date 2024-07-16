import { useArgs } from "@storybook/preview-api";

import ConfigPicker from "./ConfigPicker";

export default {
  title: "Tools/Config/ConfigPicker",
  component: ConfigPicker,
  decorators: [
    (Story) => {
      const [args, setArgs] = useArgs();
      const onChange = (value) => {
        setArgs({
          ...args,
          inputProps: {
            ...args.inputProps,
            value: value,
          },
        });
      };
      return <Story args={{ ...args, onChange }} />;
    },
  ],
};

export const TwoItems = {
  args: {
    title: "Two items",
    description: "Tooltip example",
    selected: true,
    inputProps: {
      choices: [
        ["Option 1", "Tooltip for Option 1"],
        ["Option 2", "Tooltip for Option 2"],
      ],
      value: "Option 1",
    },
  },
};

export const ThreeItems = {
  args: {
    title: "Three items",
    description: "Tooltip example",
    selected: true,
    inputProps: {
      choices: [
        ["Option 1", "Tooltip for Option 1"],
        ["Option 2", "Tooltip for Option 2"],
        ["Option 3", "Tooltip for Option 3"],
      ],
      value: "Option 2",
    },
  },
};

export const FourItemsWithWarning = {
  args: {
    title: "Four items (Warning)",
    description: "Tooltip example",
    selected: false,
    inputProps: {
      choices: [
        ["Option 1", "Tooltip for Option 1"],
        ["Option 2", "Tooltip for Option 2"],
        ["Option 3", "Tooltip for Option 3"],
        ["Option 4", "Tooltip for Option 4"],
      ],
      value: "Option 2",
    },
  },
};

export const FourItemsWithAlert = {
  args: {
    title: "Four items",
    description: "Tooltip example",
    selected: true,
    inputProps: {
      choices: [
        ["Option 1", "Tooltip for Option 1"],
        ["Option 2", "Tooltip for Option 2"],
        ["Option 3", "Tooltip for Option 2"],
        ["Option 4", "Tooltip for Option 2"],
      ],
      value: "Option 3",
    },
    showAlert: true,
    alertType: "info",
    alertMsg: "This is an info alert",
  },
};
