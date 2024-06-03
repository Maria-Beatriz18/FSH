import React, { useState } from "react";
import Logo from "../Assets/Logo.png";
import { BsCart2 } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import { FaWhatsapp } from "react-icons/fa";
import {Link} from 'react-router-dom';

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openDropdownPortais, setOpenDropdownPortais] = useState(false);
  const [openDropdownDocumentos, setOpenDropdownDocumentos] = useState(false);
  const [openDropdownCursos, setOpenDropdownCursos] = useState(false);


  const handleDropdownPortaisToggle = () => {
    setOpenDropdownPortais(!openDropdownPortais);
    setOpenDropdownDocumentos(false); // Fecha o dropdown de documentos se estiver aberto
  };

  const handleDropdownDocumentosToggle = () => {
    setOpenDropdownDocumentos(!openDropdownDocumentos);
    setOpenDropdownPortais(false); // Fecha o dropdown de portais se estiver aberto
  };

  const handleDropdownCursosToggle = () => {
    setOpenDropdownCursos(!openDropdownCursos);
    setOpenDropdownPortais(false) && setOpenDropdownDocumentos(false);// Fecha o dropdown de portais se estiver aberto
  };

  return (
    <nav>
      <div className="nav-logo-container">

    <Link to="/"> <img src={Logo} alt="" className="fsh" /> </Link>

      </div>
      <div className="navbar-links-container">
        <Link to="/sobre">Sobre</Link>
        <a href="">Cursos</a>
        <a href="">Formas de Ingresso</a>

        <div
          className="dropdown"
          onMouseEnter={handleDropdownPortaisToggle}
          onMouseLeave={handleDropdownPortaisToggle}
        >
          <a href="#">Portais</a>
          {openDropdownPortais && (
            <div className="dropdown-content">
              <a href="https://fsh.jacad.com.br/academico/aluno-v2/login">
                Portal do Aluno
              </a>
              <a href="https://fsh.jacad.com.br/prof/professor.login.logic">
                Portal do Professor
              </a>
              <a href="https://sites.google.com/fsh.edu.br/bibliotecafsh/p%C3%A1gina-inicial?authuser=0">
                Site da Biblioteca
              </a>
            </div>
          )}
        </div>

        <div
          className="dropdown"
          onMouseEnter={handleDropdownDocumentosToggle}
          onMouseLeave={handleDropdownDocumentosToggle}
        >
          <a href="#">Documentos/Editais</a>
          {openDropdownDocumentos && (
            <div className="dropdown-content">

              <a href="#" onClick={() => window.open('/Documentos/00-FSH-Regulamento Colegiado de Curso.pdf')}>
                Regulamento Colegiado de Curso
              </a>

              <a href="#" onClick={() => window.open('/Documentos/000-Regulamento da CPA.pdf')}>
                Regulamento da CPA
              </a>

              <a href="#" onClick={() => window.open('/Documentos/00-Regulamento NDE.pdf')}>
                Regulamento NDE
              </a>

              <a href="#" onClick={() => window.open('/Documentos/01-FSH-Regimento Geral.pdf')}>
                Regimento Geral
              </a>

              <a href="#" onClick={() => window.open('/Documentos/02-FSH-PDI-2024-2028.pdf')}>
                PDI
              </a>

              <a href="#" onClick={() => window.open('/Documentos/Apresentação CPA 2023_2s.pdf')}>
                Apresentação CPA
              </a>


            </div>
          )}
        </div>

        <a href="https://wa.link/4m0z6k" className="link">
          <button className="primary-button">
            Fale Conosco
            <FaWhatsapp className="navbar-cart-icon" />{" "}
          </button>{" "}
        </a>
        
      </div>
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer
        open={openMenu}
        onClose={() => setOpenMenu(false)}
        anchor="right"
      >
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {[{ text: "Home", icon: <HomeIcon /> }, { text: "sobre", icon: <InfoIcon /> }, { text: "Testimonials", icon: <CommentRoundedIcon /> }, { text: "Contact", icon: <PhoneRoundedIcon /> }, { text: "Cart", icon: <ShoppingCartRoundedIcon /> }].map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </nav>
  );
};

export default Navbar;
