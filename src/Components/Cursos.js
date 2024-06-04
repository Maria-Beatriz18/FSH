import React from "react";
import 'react-multi-carousel/lib/styles.css';
import Carousel from 'react-multi-carousel';
import ciencias from '../Assets/ciencias contabeis.jpg'; 
import adm from '../Assets/adm.jpg';
import direito from '../Assets/direito.jpg';
import sv from '../Assets/servico social.jpg';
import rh from '../Assets/rh.jpg';
import logistica from '../Assets/logistica.jpg';
import mkt from '../Assets/marketing.jpg';
import gc from '../Assets/gestao.jpg';


const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const Cursos = () => {
  const cursos = [
    {
      imgSrc: ciencias,
      title: "Ciências Contábeis (Bacharelado)",
    },
    {
      imgSrc: adm,
      title: "Administração (Bacharelado)",
    },
    {
      imgSrc: direito,
      title: "Direito (Bacharelado)",
    },
    {
      imgSrc: sv,
      title: "Serviço Social (Bacharelado)",
    },
    {
      imgSrc: rh,
      title: "Recursos Humanos (Tecnólogo)",
    },
    {
      imgSrc: logistica,
      title: "Logistica  (Tecnólogo)",
    },
    {
      imgSrc: mkt,
      title: "Marketing (Tecnólogo)",
    },
    {
      imgSrc: gc,
      title: "Gestão Comercial (Tecnólogo)",
    },
  ];

  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <h1 className="primary-heading">Cursos</h1>
        <p className="primary-text">Descubra o Caminho para o Seu Sucesso</p>
      </div>

      <Carousel responsive={responsive}>
        {cursos.map((curso, index) => (
          <div className="card" style={{ width: "100%", margin: "0 auto", maxHeight: "300px" }} key={index}>
            <img src={curso.imgSrc} className="card-img-top curso-img" alt={curso.title} />
            <div className="card-body">
              <h5 className="card-title">{curso.title}</h5>
              <p className="card-text">{curso.text}</p>
              <a href="https://docs.google.com/forms/d/19O1u_xepeaB7oBg-TkhX_3nV4iv8R4olLGgpXL_9Db8/edit?pli=1" className="btn btn-primary custom-primary-btn">Matricule-se</a>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Cursos;
