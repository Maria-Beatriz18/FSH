import React from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import Curso from "../../Components/Lista_cursos"; // Importe o componente Curso

const cursos = [
  {
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQemvg1dRAnIAZwlUoXEd2wZfzXGzngYGRtZw&s",
    titulo: "Lógistica",
    texto: "O curso tecnólogo em Logística oferece uma formação abrangente e prática para profissionais interessados em atuar na gestão eficiente de processos logísticos. Ao longo do programa, os estudantes desenvolvem habilidades essenciais para planejar, coordenar e otimizar atividades relacionadas ao transporte, armazenamento, distribuição e controle de materiais e produtos. Com disciplinas que abrangem desde gestão de operações até sistemas de informação aplicados à logística, os graduados estão preparados para assumir diversos cargos em diferentes setores, como analista de logística, supervisor de operações e coordenador de distribuição, contribuindo para a eficiência e competitividade das organizações..",
    link: "https://wa.link/4m0z6k",
  },
  {
    imagem: "https://www.oficinadanet.com.br/imagens/post/2430/marketing.jpg",
    titulo: "Marketing",
    texto: "O curso tecnólogo em Marketing oferece uma formação direcionada para profissionais interessados em compreender e atuar no mercado contemporâneo. Durante o programa, os estudantes adquirem conhecimentos abrangentes sobre estratégias de marketing, comunicação, pesquisa de mercado, gestão de marcas e produtos, além de desenvolverem habilidades práticas em áreas como marketing digital, análise de dados e comportamento do consumidor. Com uma abordagem voltada para a prática e o mercado de trabalho, os graduados estão preparados para atuar em diferentes áreas do marketing, contribuindo para o desenvolvimento e sucesso de empresas e marcas.",
    link: "https://wa.link/4m0z6k",
  },
  {
    imagem: "https://unifor.br/documents/392178/0/TAMANHO+BANNER_Prancheta+1.png/99a963d0-7cbe-c96c-de2b-587a664aff79?t=1704736024011",
    titulo: "Gestão Comercial",
    texto: "O curso tecnólogo em Gestão Comercial oferece uma formação especializada voltada para a área de vendas e gestão de negócios. Durante o programa, os alunos desenvolvem habilidades fundamentais para atuar na administração de empresas comerciais, com foco na elaboração de estratégias de vendas, gestão de equipe, análise de mercado e desenvolvimento de parcerias. Com disciplinas que abordam temas como marketing, gestão financeira, técnicas de negociação e gestão de pessoas, os graduados estão preparados para assumir cargos de liderança em empresas comerciais de diversos segmentos, contribuindo para o aumento da eficiência e competitividade no mercado.",
    link: "https://wa.link/4m0z6k",
  },
  // Adicione mais cursos aqui
];

function Tec() {
  return (
    <div className="App">
      <Navbar />
      <section className="cursos-container">
        <h2 className="titulo-cursos">Nossos cursos tecnólogos</h2>
        <div className="lista-cursos">
          {cursos.map((curso) => (
            <Curso key={curso.titulo} {...curso} /> 
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Tec;
