import React from 'react';
import Heading from '../atoms/Heading';
import Text from '../atoms/Text';

export default function CardService({ icon, title, description }) {
  const cardStyles = {
    border: '1px solid #eee',
    borderRadius: '8px',
    padding: '16px',
    textAlign: 'center',
    maxWidth: '300px',
  };

  const iconStyles = {
    fontSize: '48px',
    marginBottom: '8px',
  };

  return (
    <div style={cardStyles}>
      <div style={iconStyles}>{icon}</div>
      <Heading level={3}>{title}</Heading>
      <Text>{description}</Text>
    </div>
  );
}
