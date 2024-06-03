import React from "react";
import Logo from "../Assets/Logo.png";
import 'bootstrap/dist/css/bootstrap.min.css';

const Work = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <h1 className="primary-heading">Formas de Ingresso</h1>
        <p className="primary-text">
          O melhor caminho é aquele que funciona para você.
        </p>
      </div>
      <div className="work-section-bottom" style={{ display: "flex", flexWrap: "wrap" }}>
        <div className="card" style={{ width: "25%", margin: "0 10px 20px", maxHeight: "400px", overflowY: "auto" }}>
          <img src={Logo} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">VESTIBULAR FSH</h5>
            <p className="card-text">
              Para os alunos de primeira viagem, que não fizeram o exame nacional do ensino médio(ENEM), mas querem garantir descontos imperdíveis em nossas graduações, a FSH entrega tanto de forma on-line como de forma presencial, um vestibular do aluno. Não perca tempo, venha começar o seu futuro!
            </p>
            <a href="https://docs.google.com/forms/d/19O1u_xepeaB7oBg-TkhX_3nV4iv8R4olLGgpXL_9Db8/edit?pli=1" className="btn btn-primary">Matricule-se</a>
          </div>
          
        </div>

        <div className="card" style={{ width: "25%", margin: "0 10px 20px", maxHeight: "400px", overflowY: "auto" }}>
          <img src={Logo} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">VESTIBULAR FSH</h5>
            <p className="card-text">
              Para os alunos de primeira viagem, que não fizeram o exame nacional do ensino médio(ENEM), mas querem garantir descontos imperdíveis em nossas graduações, a FSH entrega tanto de forma on-line como de forma presencial, um vestibular do aluno. Não perca tempo, venha começar o seu futuro!
            </p>
            <a href="https://docs.google.com/forms/d/19O1u_xepeaB7oBg-TkhX_3nV4iv8R4olLGgpXL_9Db8/edit?pli=1" className="btn btn-primary">Matricule-se</a>
          </div>
          
        </div>
        <div className="card" style={{ width: "25%", margin: "0 10px 20px", maxHeight: "400px", overflowY: "auto" }}>
          <img src={Logo} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">VESTIBULAR FSH</h5>
            <p className="card-text">
              Para os alunos de primeira viagem, que não fizeram o exame nacional do ensino médio(ENEM), mas querem garantir descontos imperdíveis em nossas graduações, a FSH entrega tanto de forma on-line como de forma presencial, um vestibular do aluno. Não perca tempo, venha começar o seu futuro!
            </p>
            <a href="https://docs.google.com/forms/d/19O1u_xepeaB7oBg-TkhX_3nV4iv8R4olLGgpXL_9Db8/edit?pli=1" className="btn btn-primary">Matricule-se</a>
          </div>
          
        </div>
        <div className="card" style={{ width: "25%", margin: "0 10px 20px", maxHeight: "400px", overflowY: "auto" }}>
          <img src={Logo} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">VESTIBULAR FSH</h5>
            <p className="card-text">
              Para os alunos de primeira viagem, que não fizeram o exame nacional do ensino médio(ENEM), mas querem garantir descontos imperdíveis em nossas graduações, a FSH entrega tanto de forma on-line como de forma presencial, um vestibular do aluno. Não perca tempo, venha começar o seu futuro!
            </p>
            <a href="https://docs.google.com/forms/d/19O1u_xepeaB7oBg-TkhX_3nV4iv8R4olLGgpXL_9Db8/edit?pli=1" className="btn btn-primary">Matricule-se</a>
          </div>
          
        </div>
        {/* Os outros cards seguem o mesmo padrão */}
      </div>
    </div>
  );
};

export default Work;
