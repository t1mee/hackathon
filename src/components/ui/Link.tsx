import React, { forwardRef, RefObject } from "react";
import NextLink from "next/link";
import { Link as MuiLink, LinkProps } from "@mui/material";

const Link = forwardRef(function Link(
  { href, ...props }: LinkProps,
  ref: React.ForwardedRef<HTMLAnchorElement>,
) {
  if (!href) {
    if (process.env.NODE_ENV !== "production") {
      throw new Error("Miss 'href' prop");
    }
    return null;
  }

  if (typeof href !== "string") {
    if (process.env.NODE_ENV !== "production") {
      throw new Error("Typeof 'href' is not a string");
    }
    return null;
  }

  if (href.startsWith("/")) {
    return (
      <NextLink passHref href={href}>
        <MuiLink ref={ref} {...props} />
      </NextLink>
    );
  }

  return <MuiLink href={href} ref={ref} {...props} />;
});

export default Link;
