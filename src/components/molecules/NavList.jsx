import React from 'react';
import Nav from '../atoms/Nav';
import UnorderedList from '../atoms/UnorderedList';
import ListItem from '../atoms/ListItem';
import Anchor from '../atoms/Anchor';

export default function NavList() {
  const listStyles = {
    display: 'flex',
    gap: '16px',
    listStyle: 'none',
  };

  return (
    <Nav className="navbar">
      <UnorderedList style={listStyles}>
        <ListItem>
          <Anchor href="#home">Home</Anchor>
        </ListItem>
        <ListItem>
          <Anchor href="#servicos">Serviços</Anchor>
        </ListItem>
        <ListItem>
          <Anchor href="#portfolio">Portfólio</Anchor>
        </ListItem>
        <ListItem>
          <Anchor href="#contato">Contato</Anchor>
        </ListItem>
      </UnorderedList>
    </Nav>
  );
}
