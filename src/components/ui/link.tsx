import NextLink, { LinkProps } from "next/link";
import { FC, HTMLProps } from "react";
import { BiLinkExternal } from "react-icons/bi";

const Link: FC<
  LinkProps &
    HTMLProps<HTMLAnchorElement> & {
      external?: boolean;
    }
> = ({ children, href, external, className, ...props }) => {
  return (
    <NextLink
      href={href}
      target={external ? "_blank" : undefined}
      className={`link ${className}`}
      {...props}
    >
      {children} {external && <BiLinkExternal className="inline" />}
    </NextLink>
  );
};

export default Link;
