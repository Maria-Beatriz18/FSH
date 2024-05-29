import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/Logo.png";
import Video from "../videos/video.mp4"
import { BsFillPlayCircleFill } from "react-icons/bs";


const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>

      <div className="about-section-image-container">
      <video controls  width="400" height="520" className="video">
          <source src={Video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="about-section-text-container">
        <p className="primary-subheading"></p>
        <h1 className="primary-heading">
          Faculdade Santa Helena
        </h1>
        <p className="primary-text">
          A Faculdade Santa Helena está no ramo de ensino superior desde 1998 . Durante este tempo milhares de alunos se formaram e atualmente contribuem para a construção de um Pernambuco melhor!
        </p>
        <p className="primary-text">
         Venha cursar uma graduação em uma das melhores faculdades do Recife. Pagando valores de mensalidades que cabem no seu bolso!
        </p>
        
      </div>
    </div>
  );
};

export default About;
