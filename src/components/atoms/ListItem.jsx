import React from 'react';

export default function ListItem({ children, style, className }) {
  return (
    <li style={style} className={className}>
      {children}
    </li>
  );
}