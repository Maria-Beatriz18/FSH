import React from "react";
import { Carousel, CarouselItem } from 'react-bootstrap';
import BannerBackground from "../Assets/Logo.png";
import BannerImage from "../Assets/carroussel1.jpg";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";
import 'bootstrap/dist/css/bootstrap.min.css';



const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
        <Carousel fade>
            <CarouselItem interval={2000} className="carousel-item active">
              <img src={BannerImage} className="d-block w-100" alt="Banner Image" />
            </CarouselItem>
          
            <CarouselItem interval={2000} className="carousel-item">
              <img src={BannerImage} className="d-block w-100" alt="Banner Image" />
            </CarouselItem>
          </Carousel>
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Faça seu Futuro
          </h1>
          <p className="primary-text">
          Na Faculdade Santa Helena, o futuro é agora! Inscreva-se já e comece a transformar seus sonhos em realidade. Seu futuro começa aqui!"
          </p>
          <a href="https://docs.google.com/forms/d/19O1u_xepeaB7oBg-TkhX_3nV4iv8R4olLGgpXL_9Db8/edit?pli=1" className="link"><button className="secondary-button" >
            Matricule-se <FiArrowRight />{" "}
          </button> </a>
        </div>
        <div className="home-image-section">

          {/*<img src={BannerImage} alt="" /> */}
        </div>
      </div>

    </div>
  );
};

export default Home;
