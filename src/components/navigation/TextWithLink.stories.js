import { useArgs } from "@storybook/preview-api";

import TextWithLink from "./TextWithLink";

export default {
  title: "Navigation/TextWithLink",
  component: TextWithLink,
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
    textBeforeLink: "This is text before ",
    link: {
      href: "https://qutvirtual4.qut.edu.au/group/staff/home",
      text: "link",
    },
    textAfterLink: " and this is text after link",
  },
};

export const TextBeforeLinkOnly = {
  args: {
    textBeforeLink: "This is text before ",
    link: {
      href: "https://qutvirtual4.qut.edu.au/group/staff/home",
      text: "link",
    },
  },
};

export const TextAfterLinkOnly = {
  args: {
    link: {
      href: "https://qutvirtual4.qut.edu.au/group/staff/home",
      text: "Link",
    },
    textAfterLink: " and this is text after link",
  },
};

export const LinkOnly = {
  args: {
    link: {
      href: "https://qutvirtual4.qut.edu.au/group/staff/home",
      text: "Link Only",
    },
  },
};

export const DifferentLinkColor = {
  args: {
    textBeforeLink: "This is ",
    link: {
      href: "https://qutvirtual4.qut.edu.au/group/staff/home",
      text: "link with different color",
      color: "red.500",
    },
  },
};

export const ExternalLink = {
  args: {
    textBeforeLink: "This is ",
    link: {
      href: "https://qutvirtual4.qut.edu.au/group/staff/home",
      text: "external link",
      isExternal: true,
    },
  },
};

export const ExternalLinkWithIcon = {
  args: {
    textBeforeLink: "This is ",
    link: {
      href: "https://qutvirtual4.qut.edu.au/group/staff/home",
      text: "external link with external icon",
      isExternal: true,
    },
    hasExternalIcon: true,
  },
};
