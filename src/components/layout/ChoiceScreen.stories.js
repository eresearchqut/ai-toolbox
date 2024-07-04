import { Center } from "@chakra-ui/react";
import { useArgs } from "@storybook/preview-api";

import ChoiceScreen from "./ChoiceScreen";

export default {
  title: "Layouts/ChoiceScreen",
  component: ChoiceScreen,
  decorators: [
    (Story) => {
      const [args, setArgs] = useArgs();
      const onPageChange = (show, page) => {
        setArgs({ showPage: show, page });
      };
      return <Story args={{ ...args, onPageChange }} />;
    },
  ],
};

export const Empty = {
  args: {
    clickable: true,
    choices: [],
    pages: [],
  },
};

export const Single = {
  args: {
    clickable: true,
    choices: [
      <Center key={0} bg="magenta" height="100px">
        First
      </Center>,
    ],
    page: (
      <Center bg="red" height="100px">
        Page contents
      </Center>
    ),
  },
};

export const Binary = {
  args: {
    clickable: true,
    choices: [
      <Center key={0} bg="magenta" height="100px">
        First
      </Center>,
      <Center key={1} bg="cyan" height="100px">
        Second
      </Center>,
    ],
    page: (
      <Center bg="red" height="100px">
        Page contents
      </Center>
    ),
  },
};

export const Ternary = {
  args: {
    clickable: true,
    choices: [
      <Center key={0} bg="magenta" height="100px">
        First
      </Center>,
      <Center key={1} bg="cyan" height="100px">
        Second
      </Center>,
      <Center key={2} bg="green" height="100px">
        Third
      </Center>,
    ],
    page: (
      <Center bg="red" height="100px">
        Page contents
      </Center>
    ),
  },
};

export const Quaternary = {
  args: {
    clickable: true,
    choices: [
      <Center key={0} bg="magenta" height="100px">
        First
      </Center>,
      <Center key={1} bg="cyan" height="100px">
        Second
      </Center>,
      <Center key={2} bg="green" height="100px">
        Third
      </Center>,
      <Center key={3} bg="yellow" height="100px">
        Fourth
      </Center>,
    ],
    page: (
      <Center bg="red" height="100px">
        Page contents
      </Center>
    ),
  },
};

export const Quintenary = {
  args: {
    clickable: true,
    choices: [
      <Center key={0} bg="magenta" height="100px">
        First
      </Center>,
      <Center key={1} bg="cyan" height="100px">
        Second
      </Center>,
      <Center key={2} bg="green" height="100px">
        Third
      </Center>,
      <Center key={3} bg="yellow" height="100px">
        Fourth
      </Center>,
      <Center key={4} bg="blue" height="100px">
        Fifth
      </Center>,
    ],
    page: (
      <Center bg="red" height="100px">
        Page contents
      </Center>
    ),
  },
};
