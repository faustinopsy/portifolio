import React from 'react';
import Heading from '../atoms/Heading';
import Text from '../atoms/Text';

export default function CardPortfolio({ imageSrc, title, description }) {
  const cardStyles = {
    border: '1px solid #eee',
    borderRadius: '8px',
    padding: '16px',
    maxWidth: '300px',
    textAlign: 'center',
  };

  const imgStyles = {
    width: '100%',
    borderRadius: '8px',
    marginBottom: '8px',
  };

  return (
    <div style={cardStyles}>
      <img style={imgStyles} src={imageSrc} alt={title} />
      <Heading level={4}>{title}</Heading>
      <Text>{description}</Text>
    </div>
  );
}
