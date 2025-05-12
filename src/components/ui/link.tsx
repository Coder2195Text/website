"use client";
import NextLink, { LinkProps } from "next/link";
import { FC, HTMLProps } from "react";
import { BiLinkExternal } from "react-icons/bi";

const Link: FC<
  LinkProps &
    HTMLProps<HTMLAnchorElement> & {
      external?: boolean;
      underline?: boolean;
    }
> = ({ children, href, external, className, underline, ...props }) => {
  return (
    <NextLink
      href={href}
      target={external ? "_blank" : undefined}
      className={`${underline ? "underline-link" : ""} ${className}`}
      {...props}
    >
      {children} {external && <BiLinkExternal className="inline" />}
    </NextLink>
  );
};

export default Link;
