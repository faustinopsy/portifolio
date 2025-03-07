import React from 'react';
import Text from '../atoms/Text';
import Anchor from '../atoms/Anchor';

export default function Footer() {
  const footerStyles = {
    backgroundColor: '#0c0c0c',
    color: '#fff',
    padding: '20px',
    textAlign: 'center',
  };

  const socialStyles = {
    display: 'flex',
    justifyContent: 'center',
    gap: '16px',
    marginBottom: '10px',
  };

  const iconStyles = {
    width: '24px',
    height: '24px',
  };

  return (
    <footer style={footerStyles}>
      <div style={socialStyles}>
        <Anchor href="https://linkedin.com/faustiopsy" target="_blank" rel="noopener noreferrer">
          <img src="/icons/linkedin.png" alt="LinkedIn" style={iconStyles} />
        </Anchor>
        <Anchor href="https://github.com/faustiopsy" target="_blank" rel="noopener noreferrer">
          <img src="/icons/github.png" alt="GitHub" style={iconStyles} />
        </Anchor>
        <Anchor href="https://twitter.com/faustiopsy" target="_blank" rel="noopener noreferrer">
          <img src="/icons/twitter.png" alt="Twitter" style={iconStyles} />
        </Anchor>
      </div>
      <Text size="14px" color="#ccc">
        © {new Date().getFullYear()} - Todos os direitos reservados.
      </Text>
    </footer>
  );
}
