import React from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import Curso from "../../Components/Lista_cursos"; 
import Work from "../../Components/Work";


const cursos = [
  {
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiXLC37AdcvJNR66QuLcBU2yYI3TSIU9Csgw&s",
    titulo: "Ciências Contábeis",
    texto: "O curso de graduação em Ciências Contábeis oferece uma formação sólida e abrangente para profissionais interessados em atuar na área contábil. Durante o programa, os estudantes adquirem conhecimentos teóricos e práticos sobre contabilidade financeira, gerencial, tributária e de custos, além de temas relacionados à auditoria, controladoria, perícia contábil e legislação. Com disciplinas que abordam desde os princípios fundamentais da contabilidade até as práticas mais avançadas de análise financeira e planejamento tributário, os graduados estão preparados para exercer uma série de funções em empresas, organizações governamentais, escritórios de contabilidade, consultorias e auditorias, contribuindo para a gestão eficaz dos recursos financeiros e o cumprimento das obrigações legais das entidades.",
    link: "https://wa.link/4m0z6k",
  },
  {
    imagem: "https://profissoes.vagas.com.br/wp-content/uploads/2022/11/areas-de-atuacao-na-administracao.jpg",
    titulo: "Administração",
    texto: "O curso de graduação em Administração oferece uma formação abrangente e multidisciplinar, capacitando os estudantes para atuarem em diversos contextos organizacionais. Com uma sólida base em áreas como gestão, economia, finanças, marketing e recursos humanos, os alunos desenvolvem habilidades essenciais para planejar, coordenar e gerir recursos em empresas e organizações. Ao longo do programa, são abordados temas relevantes para o mundo corporativo, incluindo estratégias de negócios, liderança, inovação, empreendedorismo e responsabilidade social empresarial. Os graduados em Administração estão preparados para assumir cargos de liderança e contribuir para o crescimento e sucesso das organizações em um ambiente empresarial dinâmico e competitivo.",
    link: "https://wa.link/4m0z6k",
  },
  {
    imagem: "https://s2-g1.glbimg.com/xUmLXNVrkLIR8MBv89A6EhFMoew=/0x0:1600x900/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2021/v/e/QAQIQjQYaYodxf7Bv5ww/foto-1.jpg",
    titulo: "Direito",
    texto: "O curso de graduação em Direito proporciona uma formação sólida e abrangente para os estudantes interessados em compreender as diversas áreas do sistema jurídico. Ao longo do programa, os alunos são introduzidos aos fundamentos teóricos e práticos do direito, explorando disciplinas como direito civil, penal, constitucional, administrativo, entre outras. Além disso, são incentivados a desenvolver habilidades de análise crítica, argumentação jurídica, resolução de conflitos e interpretação de leis. Com essa base, os graduados estão preparados para atuar em diferentes campos profissionais, como advocacia, consultoria jurídica, magistratura, promotoria, entre outros, contribuindo para a promoção da justiça e da ordem social.",
    link: "https://wa.link/4m0z6k",
  },
  {
    imagem: "https://www.vestibulandoweb.com.br/wp-content/uploads/2021/06/profissao-servico-social.jpg.webp",
    titulo: "Serviço Social",
    texto: "O curso de graduação em Serviço Social oferece uma formação ampla e multidisciplinar, capacitando os estudantes para atuarem na promoção do bem-estar social e na defesa dos direitos humanos. Através de uma combinação de teoria e prática, os alunos desenvolvem habilidades para analisar problemas sociais, planejar e implementar políticas públicas e programas de assistência social, além de realizar intervenções individuais e coletivas que visam promover a inclusão social e a justiça social. Com enfoque na compreensão das desigualdades sociais e na busca por soluções que promovam a equidade, os graduados em Serviço Social estão preparados para atuar em diferentes contextos, como saúde, educação, assistência social, justiça e comunidade, contribuindo para a construção de uma sociedade mais justa e solidária.",
    link: "https://wa.link/4m0z6k",
  },
  
  
  // Adicione mais cursos aqui
];

function Tec() {
  return (
    <div className="App">
      <Navbar />
      <section className="cursos-container">
        <h2 className="titulo-cursos">GRADUAÇÃO</h2>
        <div className="lista-cursos">
          {cursos.map((curso) => (
            <Curso key={curso.titulo} {...curso} /> 
          ))}
        </div>
      </section>
      <Footer />
      <Work/>
    </div>
  );
}

export default Tec;
