import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Link, Text } from "@chakra-ui/react";

export default function TextWithLink({
  textBeforeLink = "",
  link = {
    href: "",
    text: "",
    color: undefined,
    isExternal: false,
  },
  hasExternalIcon = false,
  textAfterLink = "",
}) {
  return (
    <Text mb={0}>
      {textBeforeLink}
      <Link
        color={link?.color ? link.color : "teal.500"}
        href={link.href}
        isExternal={link?.isExternal}
      >
        {link.text}
        {hasExternalIcon && <ExternalLinkIcon mx="2px" />}
      </Link>
      {textAfterLink}
    </Text>
  );
}
