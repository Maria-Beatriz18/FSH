import React from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import Curso from "../../Components/Lista_cursos"; // Importe o componente Curso


const cursos = [
  {
    imagem: "https://universidadeniltonlins.com.br/wp-content/uploads/2019/07/cba_financas_e_controladoria_sug2_0.jpg",
    titulo: "Ciências Contábeis",
    texto: "Aprenda a criar interfaces web interativas com React.",
    link: "https://www.linkdocurso.com.br",
  },
  {
    imagem: "https://www.imagemnl.com/",
    titulo: "Curso de JavaScript",
    texto: "Domine a linguagem base da web e crie scripts poderosos.",
    link: "https://www.linkdocurso.com.br",
  },
  // Adicione mais cursos aqui
];

function Tec() {
  return (
    <div className="App">
      <Navbar />
      <section className="cursos-container">
      <h2 className="titulo-cursos">Nossos Cursos</h2>
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
