import React from 'react';

type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  prefetch?: boolean;
  replace?: boolean;
  scroll?: boolean;
  shallow?: boolean;
};

export default function Link({ href, prefetch: _p, replace: _r, scroll: _s, shallow: _sh, children, ...rest }: LinkProps) {
  return <a href={href} {...rest}>{children}</a>;
}
