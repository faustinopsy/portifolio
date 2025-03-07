import React from 'react';

export default function Nav({ children, style, className }) {
  return (
    <nav style={style} className={className}>
      {children}
    </nav>
  );
}
