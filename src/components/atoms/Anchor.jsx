import React from 'react';

export default function Anchor({ href, children, style, className, target, rel }) {
  return (
    <a href={href} style={style} className={className} target={target} rel={rel}>
      {children}
    </a>
  );
}