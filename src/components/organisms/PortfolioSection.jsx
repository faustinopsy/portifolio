import React from 'react';
import CardPortfolio from '../molecules/CardPortfolio';

export default function PortfolioSection() {
  const portfolioStyles = {
    display: 'flex',
    gap: '16px',
    justifyContent: 'center',
    flexWrap: 'wrap',
    padding: '40px 20px',
    backgroundColor: '#f9f9f9',
  };

  const portfolioData = [
    {
        imageSrc: '/images/phpcrud.webp',
        title: 'Gerador de sistema simples',
        description: 'Com esse gerador você consegue gerar um CRUD completo, tenho o php como backend e o vuejs como frontend.',
        link: 'https://phpcrud.ceuvago.com/#/',
    },
    {
        imageSrc: '/images/fastpage.webp',
        title: 'Gerador de landpages simples',
        description: 'Com esse gerador você consegue criar rapidamente algumas páginas de forma muito fácil.',
        link: 'https://fastpages.ceuvago.com/',
    },
    {
      imageSrc: '/images/presenca.webp',
      title: 'Gerenciador de presença escolar',
      description: 'Este sistema tem algumas opções como, marcar presença de alunos ou entrada e saída de funcionários.',
      link: 'https://escola.faustinopsy.com/',
    },
    {
      imageSrc: '/images/offcoin.webp',
      title: 'Sistemas moeda recompensa',
      description: 'Esta aplicação pode ser usada para sistema de recompensas, pois creditos podem ser transferidos via NFC.',
      link: 'https://offcoin.com.br/',
    },
    {
        imageSrc: '/images/sorte.webp',
        title: 'Gerenciador de apostas',
        description: 'Esta aplicação pode ser usada para gerenciar jogos, como conferir jogos e gerar combinações.',
        link: 'https://appsorte.ceuvago.com/',
    },
    {
        imageSrc: '/images/provas.webp',
        title: 'Simulador de provas para concursos "android"',
        description: 'Esse APP é para a comunidade de concurseiros, pois tem provas reais para testar os conhecimentos.',
        link: 'https://play.google.com/store/apps/details?id=com.faustinopsy.concursos&pli=1',
    },
    {
        imageSrc: '/images/pixel.webp',
        title: 'Jogo emoji pixel',
        description: 'Um jogo bme divertido para procurar tesouros no mapa e ao mesmo tempo fugir dos anjos.',
        link: 'https://appsorte.ceuvago.com/',
    },
    {
      imageSrc: '/images/digital.webp',
      title: 'Sistema de login por digital ou webauth',
      description: 'Um sistema que possibilita integrar em outras aplicações para login por meio do webauth.',
      link: 'https://digital.ceuvago.com/',
    },
    {
      imageSrc: '/images/trade.webp',
      title: 'Jogo simulador de trade',
      description: 'Um simulador interessante, para ensinar a vivência de trade sem precisar operar com dinheiro real.',
      link: 'https://simulatrade.ceuvago.com/',
    },
    {
        imageSrc: '/images/combinacao.webp',
        title: 'Jogo da combinação "lógica pura"',
        description: 'um jogo interressante que vi que pode prender você até que sua mente exploda procurando resolver as combinações.',
        link: 'https://cadeado.ceuvago.com/',
      },
  ];

  return (
    <section style={portfolioStyles}>
      {portfolioData.map((item, index) => (
        <CardPortfolio
          key={index}
          imageSrc={item.imageSrc}
          title={item.title}
          description={item.description}
          link={item.link}
        />
      ))}
    </section>
  );
}
