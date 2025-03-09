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
    backgroundColor: '#132d46f0',
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
    <section style={heroStyles} id="home">
      <img
        style={imageStyles}
        src="images/my-avatar.webp"
        alt="Foto de Perfil"
      />
      <Heading level={1}>Rodrigo Faustino</Heading>
      <Text size="18px" color="#ccc">
        Professor & Full Stack Developer
      </Text>
      {/* <div style={{ marginTop: '20px' }}>
        <Button onClick={() => alert('Contato!')}>Currículo</Button>
      </div> */}
    </section>
  );
}
