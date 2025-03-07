import React from 'react';
import Heading from '../atoms/Heading';
import Text from '../atoms/Text';
import Button from '../atoms/Button';

export default function HeroSection() {
  const heroStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '60px 20px',
    textAlign: 'center',
    backgroundColor: '#1f1f1f',
    color: '#fff',
  };

  const imageStyles = {
    width: '120px',
    height: '120px',
    borderRadius: '50%',
    marginBottom: '20px',
    objectFit: 'cover',
  };

  return (
    <section style={heroStyles}>
      <img
        style={imageStyles}
        src="https://faustinopsy.com/assets/images/my-avatar.webp"
        alt="Foto de Perfil"
      />
      <Heading level={1}>Hello, I'm Rodrigo Faustino</Heading>
      <Text size="18px" color="#ccc">
        UI/UX Designer & Full Stack Developer
      </Text>
      <div style={{ marginTop: '20px' }}>
        <Button onClick={() => alert('Contato!')}>Work With Me</Button>
      </div>
    </section>
  );
}
