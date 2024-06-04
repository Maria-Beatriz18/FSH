import React from "react";

const Curso = ({ imagem, titulo, texto, link }) => {
  return (
    <div className="curso">
      <div className="image-curso">
        <img src={imagem} alt={titulo} />
      </div>
      <div className="texto-curso">
        <h2>{titulo}</h2>
        <p>{texto}</p>
        <a href={link} className="btn-curso">Matricule-se</a>
      </div>
    </div>
  );
};

export default Curso;
