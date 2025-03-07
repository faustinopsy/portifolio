import React from 'react';

export default function Heading({ level = 1, children }) {
  const Tag = `h${level}`;
  return <Tag>{children}</Tag>;
}
