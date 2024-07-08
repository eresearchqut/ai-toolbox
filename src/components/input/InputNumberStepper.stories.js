import { useArgs } from "@storybook/preview-api";

import InputNumberStepper from "./InputNumberStepper";

export default {
  title: "Inputs/InputNumberStepper",
  component: InputNumberStepper,
  decorators: [
    (Story) => {
      const [args, setArgs] = useArgs();
      const onChange = (value) => {
        setArgs({ value });
      };
      return <Story args={{ ...args, onChange }} />;
    },
  ],
};

export const Simple = {
  args: {
    label: "Label",
  },
};

export const LabelWithRange = {
  args: {
    label: "Label with range (1-100)",
    min: 1,
    max: 100,
  },
};

export const LabelRangeAndStep = {
  args: {
    label: "Label & range (2-100) with steps",
    min: 2,
    max: 100,
    step: 2,
  },
};
