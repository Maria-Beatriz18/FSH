import React from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import Curso from "../../Components/Lista_cursos"; // Importe o componente Curso

const cursos = [
  {
    imagem: "https://fia.com.br/wp-content/uploads/2022/06/gestao-de-pessoas-o-que-e-importancia-como-desenvolver-1280x720.jpg",
    titulo: "Gestão de pessoas e liderança",
    texto: "Aprenda a criar interfaces web interativas com React.",
    link: "https://wa.link/4m0z6k",
  },
  {
    imagem: "https://www.insper.edu.br/wp-content/uploads/2023/11/01_CAPA_Qual_e_a_diferenca_entre_-contabilidade_controladoria.jpg",
    titulo: "Contabilidade tributária",
    texto: "Domine a linguagem base da web e crie scripts poderosos.",
    link: "https://wa.link/4m0z6k",
  },
  {
    imagem: "https://setting.com.br/wp-content/uploads/2018/10/gestao-financeira.jpeg",
    titulo: "Gestão de finanças e controladoria",
    texto: "Domine a linguagem base da web e crie scripts poderosos.",
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
      <Footer />
    </div>
  );
}

export default Tec;
