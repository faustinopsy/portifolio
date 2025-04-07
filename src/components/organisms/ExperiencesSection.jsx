import React from 'react';
import ExperienceCard from '../molecules/ExperienceCard';

export default function ExperiencesSection() {
  const experiencesStyles = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '16px',
    justifyContent: 'center',
    padding: '40px 20px',
    backgroundColor: '#191e29',
    color: '#ffca65'
  };

  const sectionStyles = {
    padding: '40px 20px',
    textAlign: 'center',
    backgroundColor: '#191e29',
    color: '#ffca65'
  };
  const experiencesData = [
    {
      company: 'Fatec',
      role: 'Professor de Desenvolvimento Web',
      period: '2023 - Atualmente',
      description: `Leciono Desenvolvimento Web I, II e III, cobrindo assuntos desde o nível iniciante até o avançado.
Ofereço mentoria para estudantes em projetos inovadores e coordenei equipes de alunos-estagiários para restruturação e modernização do site da Fatec Itaquera.`,
      logo: '/images/fatec-logo.png'
    },
    {
      company: 'Tecnol',
      role: 'Analista Desenvolvedor de Software',
      period: '2022 - 2023',
      description: `Planejei e desenvolvi sistemas web usando PHP, Laravel, CodeIgniter e Vue.js.
Integrei APIs REST e SOAP, e criei webservices para os sistemas financeiros e bancários se comunicarem com Detrans.
Otimizei a interoperabilidade dos sistemas, reduzindo o tempo de processamento em 15%.
Implementei um serviço de chat para suporte entre clientes externos e o serviço de suporte interno, reduzindo o custo da assinatura de serviço de suporte externo em 100%.`,
      logo: '/images/empresa-x-logo.png'
    },
    {
      company: 'PMESP',
      role: 'Desenvolvedor Full Stack',
      period: '2012 - 2022',
      description: `Criei e mantive aplicações web para serviços de saúde mental, CRM e software de gerenciamento de crises.
Entreguei soluções de backend escaláveis em PHP com MySQL e SQLServer.
Colaborei com equipes para melhorar os recursos dos produtos, atingindo 20% de aumento na satisfação do cliente.
Implementei uma solução para o sistema interno de psicologia que melhorou a usabilidade e tempo de vida do sistema, pois o sistema anterior não tinha uma camada de persistência sólida.`,
      logo: '/images/empresa-y-logo.png'
    }
  ];

  return (
    <section style={sectionStyles}>
      <h2>Experiência</h2>
        <section style={experiencesStyles} id="experiencias" role="region" aria-label="Seção de Experiências Profissionais">
        {experiencesData.map((exp, index) => (
            <ExperienceCard
            key={index}
            company={exp.company}
            role={exp.role}
            period={exp.period}
            description={exp.description}
            />
        ))}
        </section>
    </section>
  );
}
