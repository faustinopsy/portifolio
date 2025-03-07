import React, { useState, useEffect } from 'react';
import Input from '../atoms/Input';
import Textarea from '../atoms/Textarea';
import Button from '../atoms/Button';

export default function ContactForm() {
  const [csrfToken, setCsrfToken] = useState('');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null);

  useEffect(() => {
    async function fetchCsrfToken() {
      try {
        const response = await fetch('http://localhost:8000/get-csrf-token.php', {
          method: 'POST',
          credentials: 'include',
          headers: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
          const data = await response.json();
          setCsrfToken(data.csrf_token);
        } else {
          console.error('Erro ao buscar token CSRF');
        }
      } catch (error) {
        console.error('Erro ao buscar token CSRF:', error);
      }
    }
    fetchCsrfToken();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    if (!csrfToken) {
      console.error('CSRF token ausente');
      setStatus('error');
      return;
    }

    const payload = { ...formData, csrf_token: csrfToken };
    console.log(csrfToken)
    try {
      const response = await fetch('http://localhost:8000/send-email.php', {
        method: 'POST',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' 
          
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  const formStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    maxWidth: '400px',
    margin: '0 auto',
  };

  const inputStyles = {
    padding: '8px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  };

  const buttonStyles = {
    padding: '10px',
    backgroundColor: '#2F80ED',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  };

  return (
    <form onSubmit={handleSubmit} style={formStyles}>
      <Input
        type="text"
        name="name"
        placeholder="Seu nome"
        value={formData.name}
        onChange={handleChange}
        style={inputStyles}
        required
      />
      <Input
        type="email"
        name="email"
        placeholder="Seu e-mail"
        value={formData.email}
        onChange={handleChange}
        style={inputStyles}
        required
      />
      <Textarea
        name="message"
        placeholder="Sua mensagem"
        value={formData.message}
        onChange={handleChange}
        style={{ ...inputStyles, height: '120px' }}
        required
      />
      <Button type="submit" style={buttonStyles}>
        Enviar
      </Button>
      {status === 'loading' && <p>Enviando...</p>}
      {status === 'success' && <p>Mensagem enviada com sucesso!</p>}
      {status === 'error' && <p>Ocorreu um erro. Tente novamente.</p>}
    </form>
  );
}
