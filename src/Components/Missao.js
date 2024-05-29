import React from "react";
import Logo from "../Assets/Logo.png" ;
import { AiFillStar } from "react-icons/ai";

const Missao = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <h1 className="primary-heading">Missão</h1>
        <p className="primary-text">
        Transformar vidas, através da educação, com o objetivo de formar profissionais competentes e capazes de enfrentar um mundo em constante transformação, possibilitando o aumento da empregabilidade, tendo como pilares os valores humanos e a sustentabilidade.
        </p>
      </div>
      <div className="missao-section-bottom">
        <img src={Logo} alt="" />
      </div>
    </div>
  );
};

export default Missao;
