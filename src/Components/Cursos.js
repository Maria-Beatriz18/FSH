import React from "react";
import Logo from "../Assets/Logo.png";
import 'react-multi-carousel/lib/styles.css';
import Carousel from 'react-multi-carousel';

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
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <h1 className="primary-heading">Cursos</h1>
        <p className="primary-text">Descubra o Caminho para o Seu Sucesso</p>

       
      </div>

      <Carousel responsive={responsive}>
        {[...Array(8)].map((_, index) => (
          <div className="card" style={{ width: "90%", margin: "0 auto" }} key={index}>
            <img src={Logo} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title {index + 1}</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="https://docs.google.com/forms/d/19O1u_xepeaB7oBg-TkhX_3nV4iv8R4olLGgpXL_9Db8/edit?pli=1" className="btn btn-primary">Matricule-se</a>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Cursos;
