import React from 'react';
import CardService from '../molecules/CardService';

export default function ServicesSection() {
  const servicesStyles = {
    display: 'flex',
    gap: '16px',
    justifyContent: 'center',
    padding: '40px 20px',
    backgroundColor: '#191e29',
    color: '#ffca65',
  };

  const servicesData = [
    {
      icon: '/images/icon-design.svg',
      title: 'Interface Design',
      description: 'Criação de interfaces modernas e intuitivas.',
    },
    {
      icon: '/images/icon-dev.svg',
      title: 'Web Development',
      description: 'Desenvolvimento de aplicações web responsivas.',
    },
    {
      icon: '/images/icon-app.svg',
      title: 'Mobile Design',
      description: 'Layout otimizado para dispositivos móveis.',
    },
  ];

  return (
    <section style={servicesStyles} id='servicos'>
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
