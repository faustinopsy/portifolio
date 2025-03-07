import React from 'react';

export default function Button({ children, onClick, variant = 'primary' }) {
  const styles = {
    padding: '10px 20px',
    backgroundColor: variant === 'primary' ? '#2F80ED' : '#333',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  return (
    <button style={styles} onClick={onClick}>
      {children}
    </button>
  );
}
