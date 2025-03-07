import React from 'react';

export default function Textarea({ name, placeholder, value, onChange, style, ...props }) {
  return (
    <textarea
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      style={style}
      {...props}
    />
  );
}
