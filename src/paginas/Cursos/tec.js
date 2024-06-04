import React from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import Curso from "../../Components/Lista_cursos"; // Importe o componente Curso

const cursos = [
  {
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQemvg1dRAnIAZwlUoXEd2wZfzXGzngYGRtZw&s",
    titulo: "Lógistica",
    texto: "Aprenda a criar interfaces web interativas com React.",
    link: "https://wa.link/4m0z6k",
  },
  {
    imagem: "https://www.oficinadanet.com.br/imagens/post/2430/marketing.jpg",
    titulo: "Marketing",
    texto: "Domine a linguagem base da web e crie scripts poderosos.",
    link: "https://wa.link/4m0z6k",
  },
  {
    imagem: "https://unifor.br/documents/392178/0/TAMANHO+BANNER_Prancheta+1.png/99a963d0-7cbe-c96c-de2b-587a664aff79?t=1704736024011",
    titulo: "Gestão Comercial",
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
