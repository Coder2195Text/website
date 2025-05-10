"use client";

import NextLink, { LinkProps } from "next/link";
import { FC, HTMLProps, ReactNode } from "react";
import { BiLinkExternal } from "react-icons/bi";
import { useTooltip } from "../context/tooltip";
import { useTransitioning } from "../context/transition";

const Link: FC<
  LinkProps &
    HTMLProps<HTMLAnchorElement> & {
      external?: boolean;
      underline?: boolean;
      tooltip?: ReactNode;
    }
> = ({ children, href, external, className, underline, tooltip, ...props }) => {
  const { setTooltip } = useTooltip();
  const { transitioning } = useTransitioning();

  return (
    <NextLink
      href={href}
      target={external ? "_blank" : undefined}
      className={`${underline ? "underline-link" : ""} ${className}`}
      onPointerOverCapture={() => {
        if (!tooltip || transitioning) return;

        setTooltip(tooltip);
      }}
      onPointerCancelCapture={() => {
        if (!tooltip || transitioning) return;
        setTooltip(null);
      }}
      onPointerOutCapture={() => {
        if (!tooltip || transitioning) return;
        setTooltip(null);
      }}
      {...props}
    >
      {children} {external && <BiLinkExternal className="inline" />}
    </NextLink>
  );
};

export default Link;
