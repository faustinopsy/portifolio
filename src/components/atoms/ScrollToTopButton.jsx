import React, { useState, useEffect } from 'react';

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const docHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setVisible(scrollPercent > 4);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const buttonStyles = {
    position: 'fixed',
    right: '10px',
    bottom: '20px',
    padding: '10px 15px',
    backgroundColor: '#01c38d',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    boxShadow: '0 2px 5px rgba(0,0,0,0.3)',
    transition: 'opacity 0.3s ease-in-out',
    zIndex: 10000,
  };

  return visible ? (
    <button onClick={scrollToTop} style={buttonStyles} aria-label="Voltar ao topo">
      ↑ Topo
    </button>
  ) : null;
}
