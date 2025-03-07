import React from 'react';
import Heading from '../atoms/Heading';
import Text from '../atoms/Text';
import Anchor from '../atoms/Anchor';

export default function CardPortfolio({ imageSrc, title, description, link }) {
  const cardStyles = {
    border: '1px solid #eee',
    borderRadius: '8px',
    padding: '16px',
    maxWidth: '300px',
    textAlign: 'center',
    backgroundColor: '#ffffff42',
  };

  const imgStyles = {
    width: '100%',
    borderRadius: '8px',
    marginBottom: '8px',
  };

  const buttonStyles = {
    display: 'inline-block',
    marginTop: '12px',
    padding: '8px 16px',
    backgroundColor: '#01c38d',
    color: '#fff',
    textDecoration: 'none',
    borderRadius: '4px',
  };

  return (
    <div style={cardStyles}>
      <img style={imgStyles} src={imageSrc} alt={title} />
      <Heading level={4}>{title}</Heading>
      <Text>{description}</Text>
      {link && (
        <Anchor
          href={link}
          style={buttonStyles}
          target="_blank"
          rel="noopener noreferrer"
        >
          Ver Projeto
        </Anchor>
      )}
    </div>
  );
}
