import React from 'react';

export default function Input({ type = "text", name, placeholder, value, onChange, style, ...props }) {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      style={style}
      {...props}
    />
  );
}
