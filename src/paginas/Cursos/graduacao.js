import React from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import Curso from "../../Components/Lista_cursos"; // Importe o componente Curso

const cursos = [
  {
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiXLC37AdcvJNR66QuLcBU2yYI3TSIU9Csgw&s",
    titulo: "Ciências Contábeis",
    texto: "Aprenda a criar interfaces web interativas com React.",
    link: "https://wa.link/4m0z6k",
  },
  {
    imagem: "https://profissoes.vagas.com.br/wp-content/uploads/2022/11/areas-de-atuacao-na-administracao.jpg",
    titulo: "Administração",
    texto: "Domine a linguagem base da web e crie scripts poderosos.",
    link: "https://wa.link/4m0z6k",
  },
  {
    imagem: "https://s2-g1.glbimg.com/xUmLXNVrkLIR8MBv89A6EhFMoew=/0x0:1600x900/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2021/v/e/QAQIQjQYaYodxf7Bv5ww/foto-1.jpg",
    titulo: "Direito",
    texto: "Domine a linguagem base da web e crie scripts poderosos.",
    link: "https://wa.link/4m0z6k",
  },
  {
    imagem: "https://www.vestibulandoweb.com.br/wp-content/uploads/2021/06/profissao-servico-social.jpg.webp",
    titulo: "Serviço Social",
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
        <h2 className="titulo-cursos">GRADUAÇÃO</h2>
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
