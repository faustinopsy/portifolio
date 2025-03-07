import React from 'react';

export default function UnorderedList({ children, style, className }) {
  return (
    <ul style={style} className={className}>
      {children}
    </ul>
  );
}