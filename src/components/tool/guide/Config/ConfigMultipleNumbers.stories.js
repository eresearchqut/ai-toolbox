import { useArgs } from "@storybook/preview-api";

import ConfigMultipleNumbers from "./ConfigMultipleNumbers";

export default {
  title: "Tools/Config/ConfigMultipleNumbers",
  component: ConfigMultipleNumbers,
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

export const SimpleTwoNumbers = {
  args: {
    title: "2 Numbers",
    description: "Tooltip example",
    selected: false,
    value: { numberOne: 1, numberTwo: 2 },
    inputProps: { min: 1, max: 50, step: 1 },
  },
};

export const TwoNumbersDifferentRanges = {
  args: {
    title: "2 Numbers Different Ranges",
    description:
      "When you pass in different ranges, make sure number of props sets matches number of values.",
    selected: true,
    value: { numberOne: 1, numberTwo: 2 },
    inputProps: [
      { min: 1, max: 10 },
      { min: 1, max: 25 },
    ],
  },
};

export const ThreeNumbersDifferentSteps = {
  args: {
    title: "3 Numbers Different Steps",
    description:
      "When you pass in different steps, make sure number of props sets matches number of values.",
    selected: true,
    value: { numberOne: 1, numberTwo: 2, numberThree: 3 },
    inputProps: [{ step: 1 }, { step: 2 }, { step: 3 }],
  },
};

export const FourNumbersDifferentRangeSteps = {
  args: {
    title: "4 Numbers Different steps",
    description:
      "When you pass in different ranges and ranges, make sure number of props sets matches number of values",
    selected: true,
    value: { numberOne: 1, numberTwo: -100, numberThree: 0, numberFour: 100 },
    inputProps: [
      { min: 1, max: 10, step: 1 },
      { min: -100, max: 100, step: 10 },
      { min: 0, max: 500, step: 100 },
      { min: 100, max: 1000, step: 200 },
    ],
  },
};
