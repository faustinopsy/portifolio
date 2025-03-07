import React from 'react';

export default function Anchor({ href, children, style, className }) {
  return (
    <a href={href} style={style} className={className}>
      {children}
    </a>
  );
}