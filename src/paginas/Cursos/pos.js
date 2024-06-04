import React from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import Curso from "../../Components/Lista_cursos"; // Importe o componente Curso
import Work from "../../Components/Work";


const cursos = [
  {
    imagem: "https://fia.com.br/wp-content/uploads/2022/06/gestao-de-pessoas-o-que-e-importancia-como-desenvolver-1280x720.jpg",
    titulo: "Gestão de pessoas e liderança",
    texto: "A pós-graduação em Gestão de Pessoas e Liderança oferece uma formação avançada e especializada para profissionais que buscam aprimorar suas habilidades em liderança e gestão de equipes. Com foco no desenvolvimento de competências essenciais para a liderança eficaz, o programa aborda temas como gestão de talentos, motivação, comunicação interpessoal, resolução de conflitos, desenvolvimento organizacional e estratégias de liderança. Por meio de abordagens teóricas e práticas, os participantes são capacitados para enfrentar os desafios complexos do ambiente corporativo contemporâneo, promovendo o crescimento pessoal e profissional, além de contribuir para o sucesso e a sustentabilidade das organizações.",
    link: "https://wa.link/4m0z6k",
  },
  {
    imagem: "https://www.insper.edu.br/wp-content/uploads/2023/11/01_CAPA_Qual_e_a_diferenca_entre_-contabilidade_controladoria.jpg",
    titulo: "Contabilidade tributária",
    texto: "O curso de pós-graduação em Contabilidade Tributária oferece uma especialização avançada para profissionais contábeis interessados em aprofundar seus conhecimentos na área tributária. Com foco nas legislações fiscais e nas práticas contábeis relacionadas aos tributos, os participantes exploram temas como planejamento tributário, análise de regimes de tributação, apuração de impostos, obrigações acessórias e auditoria fiscal. Por meio de estudos de casos e discussões teóricas, os alunos são capacitados a desenvolver estratégias eficazes de gestão tributária, visando à redução de custos, conformidade legal e maximização dos resultados financeiros das organizações.",
    link: "https://wa.link/4m0z6k",
  },
  {
    imagem: "https://setting.com.br/wp-content/uploads/2018/10/gestao-financeira.jpeg",
    titulo: "Gestão de finanças e controladoria",
    texto: "O curso de pós-graduação em Gestão de Finanças e Controladoria oferece uma especialização voltada para profissionais que buscam aprimorar seus conhecimentos e habilidades na área financeira e de controle dentro das organizações. Ao longo do programa, os participantes têm a oportunidade de aprofundar seus estudos em temas como análise financeira, gestão de custos, orçamento empresarial, controle interno, compliance e governança corporativa. Com uma abordagem prática e atualizada, o curso prepara os alunos para assumirem cargos de liderança e gestão nas áreas financeira e de controladoria, contribuindo para a tomada de decisões estratégicas e o sucesso organizacional.",
    link: "https://wa.link/4m0z6k",
  },
  // Adicione mais cursos aqui
];

function Tec() {
  return (
    <div className="App">
      <Navbar />
      <section className="cursos-container">
        <h2 className="titulo-cursos">PÓS- GRADUAÇÃO</h2>
        <div className="lista-cursos">
          {cursos.map((curso) => (
            <Curso key={curso.titulo} {...curso} /> 
          ))}
        </div>
      </section>
      <Work/>
      <Footer />
    </div>
  );
}

export default Tec;
