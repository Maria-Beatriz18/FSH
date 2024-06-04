import React from "react";
import Logo from "../Assets/Logo.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';

const Cursos = () => {
  return (
    
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <h1  className="primary-heading">Cursos</h1>
        {/* <p className="primary-text">Matricule-se</p> */}
      </div>

      <Carousel interval={null} controls={true} indicators={false}>
        <Carousel.Item>
          <div className="d-flex justify-content-between">
            <div className="card" style={{ width: "30%" }}>
              <img src={Logo} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="https://docs.google.com/forms/d/19O1u_xepeaB7oBg-TkhX_3nV4iv8R4olLGgpXL_9Db8/edit?pli=1"  className="btn btn-primary">Matricule-se</a>
              </div>
            </div>
            <div className="card" style={{ width: "30%" }}>
              <img src={Logo} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="https://docs.google.com/forms/d/19O1u_xepeaB7oBg-TkhX_3nV4iv8R4olLGgpXL_9Db8/edit?pli=1"  className="btn btn-primary">Matricule-se</a>
              </div>
            </div>
            <div className="card" style={{ width: "30%" }}>
              <img src={Logo} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="https://docs.google.com/forms/d/19O1u_xepeaB7oBg-TkhX_3nV4iv8R4olLGgpXL_9Db8/edit?pli=1"  className="btn btn-primary">Matricule-se</a>
              </div>
            </div>
            
            {/* Adicione mais dois cards aqui */}
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="d-flex justify-content-between">
            {/* Adicione mais três cards aqui */}
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Cursos;
