import React from 'react';
import Heading from '../atoms/Heading';
import NavList from '../molecules/NavList';

export default function Header() {
  const headerStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '16px 32px',
    backgroundColor: '#0c0c0c',
    color: '#fff',
  };

  return (
    <header style={headerStyles}>
      <Heading level={2}>Faustinopsy</Heading>
      <NavList />
    </header>
  );
}
