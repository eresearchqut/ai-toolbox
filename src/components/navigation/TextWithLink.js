import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Link } from "@chakra-ui/react";

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
    <>
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
    </>
  );
}
