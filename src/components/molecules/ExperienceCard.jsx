import React from 'react';
import Heading from '../atoms/Heading';
import Text from '../atoms/Text';

export default function ExperienceCard({ company, role, period, description, logo }) {
  const cardStyles = {
    border: '1px solid #eee',
    borderRadius: '8px',
    padding: '16px',
    textAlign: 'center',
    maxWidth: '300px',
    color: '#01c38d'
  };

  const logoStyles = {
    width: '50px',
    height: '50px',
    objectFit: 'contain',
    marginBottom: '8px'
  };

  return (
    <div style={cardStyles} role="article" aria-label={`Experiência profissional: ${company}, ${role}`}>
      {logo && <img src={logo} alt={`${company} logo`} style={logoStyles} />}
      <Heading level={3}>{company}</Heading>
      <Text>{role}</Text>
      <Text size="0.9em" color="#666">{period}</Text>
      <Text>{description}</Text>
    </div>
  );
}
