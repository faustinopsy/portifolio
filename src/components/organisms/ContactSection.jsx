import React from 'react';
import ContactForm from './ContactForm';

export default function ContactSection() {
  const sectionStyles = {
    padding: '40px 20px',
    backgroundColor: '#132d46f0',
    textAlign: 'center',
  };

  return (
    <section id="contato" style={sectionStyles}>
      <h2>Contato</h2>
      <ContactForm />
    </section>
  );
}
