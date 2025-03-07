import React from 'react';
import CardService from '../molecules/CardService';

export default function ServicesSection() {
  const servicesStyles = {
    display: 'flex',
    gap: '16px',
    justifyContent: 'center',
    padding: '40px 20px',
    backgroundColor: '#fff',
  };

  const servicesData = [
    {
      icon: '🎨',
      title: 'Interface Design',
      description: 'Criação de interfaces modernas e intuitivas.',
    },
    {
      icon: '⚙️',
      title: 'Web Development',
      description: 'Desenvolvimento de aplicações web responsivas.',
    },
    {
      icon: '📱',
      title: 'Mobile Design',
      description: 'Layout otimizado para dispositivos móveis.',
    },
  ];

  return (
    <section style={servicesStyles}>
      {servicesData.map((service, index) => (
        <CardService
          key={index}
          icon={service.icon}
          title={service.title}
          description={service.description}
        />
      ))}
    </section>
  );
}
