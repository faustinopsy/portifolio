import React from 'react';

export default function Text({ children, size = '16px', color = '#fff' }) {
  const styles = {
    fontSize: size,
    color,
  };

  return <p style={styles}>{children}</p>;
}
