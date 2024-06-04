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
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openDropdown, setOpenDropdown] = useState({
    portais: false,
    documentos: false,
    cursos: false,
  });

  const handleDropdownToggle = (dropdown) => {
    setOpenDropdown((prev) => ({
      ...prev,
      [dropdown]: !prev[dropdown],
    }));
  };

  return (
    <nav>
      <div className="nav-logo-container">
        <Link to="/"> <img src={Logo} alt="Logo" className="fsh" /> </Link>
      </div>
      <div className="navbar-links-container">
      <Link to="/">Inicio</Link>
        <Link to="/sobre">Sobre</Link>
        <a href="">Cursos</a>
        <a href="">Formas de Ingresso</a>

        <div
          className="dropdown"
          onMouseEnter={() => handleDropdownToggle('portais')}
          onMouseLeave={() => handleDropdownToggle('portais')}
        >
          <a href="#">Portais</a>
          {openDropdown.portais && (
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
          onMouseEnter={() => handleDropdownToggle('documentos')}
          onMouseLeave={() => handleDropdownToggle('documentos')}
        >
          <a href="#">Documentos/Editais</a>
          {openDropdown.documentos && (
            <div className="dropdown-content">
              {['/Documentos/00-FSH-Regulamento Colegiado de Curso.pdf', '/Documentos/000-Regulamento da CPA.pdf', '/Documentos/00-Regulamento NDE.pdf', '/Documentos/01-FSH-Regimento Geral.pdf', '/Documentos/02-FSH-PDI-2024-2028.pdf', '/Documentos/Apresentação CPA 2023_2s.pdf'].map((doc, index) => (
                <a key={index} href="#" onClick={() => window.open(doc)}>
                  {doc.split('/').pop().replace('.pdf', '').replace(/[-_]/g, ' ')}
                </a>
              ))}
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
            {[{ text: "Sobre", icon: <HomeIcon /> }, { text: "Cursos", icon: <InfoIcon /> }, { text: "Formas de Ingresso", icon: <CommentRoundedIcon /> }, { text: "Portais", icon: <PhoneRoundedIcon /> }, { text: "Documentos/Editais", icon: <ShoppingCartRoundedIcon /> }].map((item) => (
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
