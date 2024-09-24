import CommandBox from "./CommandBox";

export default {
  title: "Outputs/CommandBox",
  component: CommandBox,
};

export const CommandOnly = {
  args: {
    command: "ls -lah",
  },
};

export const CommandAndOutput = {
  args: {
    command: "ls -lah",
    output: "-rw-r--r-- 1 user group 0 Jan 01 00:00 file.txt",
  },
};

export const MultilineCommandAndOutput = {
  args: {
    command: [
      "echo 'Hello, world!' > file.txt",
      "ls -lah",
      "cat file.txt",
    ].join("\n"),
    output: `-rw-r--r-- 1 user group 0 Jan 01 00:00 file.txt
Hello, world!`,
  },
};

export const Editable = {
  args: {
    command: "ls -lah",
    editable: true,
  },
};
