import React from 'react';

export default function Button({ type = "button", children, onClick, style, ...props }) {
    return (
      <button type={type} onClick={onClick} style={style} {...props}>
        {children}
      </button>
    );
  }