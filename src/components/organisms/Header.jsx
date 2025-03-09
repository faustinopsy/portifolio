import React from 'react';
import Heading from '../atoms/Heading';
import NavList from '../molecules/NavList';

export default function Header() {
  const headerStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '16px 32px',
    backgroundColor: '#191E29',
    color: '#fff',
  };

  return (
    <header style={headerStyles}>
      <Heading level={2} className="logo">Faustinopsy</Heading>
      <NavList />
    </header>
  );
}
