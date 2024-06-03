import React from "react";
import ChooseMeals from "../Assets/choose-image.png";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Logo from "../Assets/Logo.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';




const Work = () => {
  
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        {/* <p className="primary-subheading">Work</p> */}
        <h1 className="primary-heading">Formas de Ingresso</h1>
        <p className="primary-text">
        O melhor caminho é aquele que funciona para você.
        </p>
      </div>
      <div className="work-section-bottom">
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
            <div className="card" style={{ width: "30%" }}>
              <img src={Logo} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="https://docs.google.com/forms/d/19O1u_xepeaB7oBg-TkhX_3nV4iv8R4olLGgpXL_9Db8/edit?pli=1"  className="btn btn-primary">Matricule-se</a>
              </div>
            </div>
      </div>
    </div>
  );
};

export default Work;
