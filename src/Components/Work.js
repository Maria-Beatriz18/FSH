import React from "react";
import Logo from "../Assets/vestibular.jpg";
import enem from "../Assets/enem.jpg";
import pd from "../Assets/pd.jpg";
import trans from "../Assets/VERTICAL COMPLETA FUNDO AZUL .png";



import 'bootstrap/dist/css/bootstrap.min.css';

const Work = () => {
  return (
    
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <h1 id="formas-de-ingresso" className="primary-heading">Formas de Ingresso</h1>
        <p className="primary-text">
          O melhor caminho é aquele que funciona para você.
        </p>
      </div>
      <div className="work-section-bottom" style={{ display: "flex", flexWrap: "wrap" }}>
        <div className="card" style={{ width: "22%", margin: "0 10px 20px", maxHeight: "400px", overflowY: "auto" }}>
          <img src={Logo} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">VESTIBULAR FSH</h5>
            <p className="card-text">
              Para os alunos de primeira viagem, que não fizeram o exame nacional do ensino médio(ENEM), mas querem garantir descontos imperdíveis em nossas graduações, a FSH entrega tanto de forma on-line como de forma presencial, um vestibular do aluno. Não perca tempo, venha começar o seu futuro!

            </p>

            <p className="card-text">
              Como eu faço? Entre em contato por WhatsApp e ligação para falar com um dos nossos consultores ou acessando o link matrícule-se no site. Após isso você deve fazer a prova em até 4 horas. A prova sendo feita o seu resultado sai automaticamente pela IA que corrige na hora.
            </p>

            <p className="card-text">
              Após corrigido o consultor vai lhe guiar no processo de matrícula. Rápido o suficiente para começar já a garantir seu futuro.
            </p>
            <a href="https://docs.google.com/forms/d/19O1u_xepeaB7oBg-TkhX_3nV4iv8R4olLGgpXL_9Db8/edit?pli=1" className="btn btn-primary">Matricule-se</a>
          </div>

        </div>

        <div className="card" style={{ width: "22%", margin: "0 10px 20px", maxHeight: "400px", overflowY: "auto" }}>
          <img src={enem} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">NOTA DO ENEM</h5>
            <p className="card-text">
              Você que deseja usar sua nota do ENEM para estudar na melhor faculdade de Recife, aqui na FSH aceitamos notas de até 2019. Rápido e fácil, fale conosco pelo nosso WhatsApp e você vai conseguir ingressar em uma instituição com ensino de ponta e os melhores professores da área!
            </p>

            <p className="card-text">
              Como eu faço? Após entrar em contato com um de nossos consultores, eles vão calcular sua nota, lhe informar se está apto a cursar conosco. Depois ele vai lhe guiar até a finalização da matrícula.
            </p>


            <a href="https://docs.google.com/forms/d/19O1u_xepeaB7oBg-TkhX_3nV4iv8R4olLGgpXL_9Db8/edit?pli=1" className="btn btn-primary">Matricule-se</a>
          </div>

        </div>
        <div className="card" style={{ width: "22%", margin: "0 10px 20px", maxHeight: "400px", overflowY: "auto" }}>
          <img src={pd} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">PORTADOR DE DIPLOMA</h5>
            <p className="card-text">
              Não sabe o que fazer após concluir sua graduação? Onde se especializar em novos cursos? O seu diploma é importante e na FSH,você garante seu ingresso sem precisar de Vestibular ou nota do ENEM, rápido e prático. Ainda ganhando descontos especiais.
            </p>

            <p className="card-text">
              Como eu faço? Basta entrar em contato com um dos nossos consultores e ele vai te informar como usar seu diploma, seu desconto e assim guiar até a finalização de matrícula.
            </p>


            <a href="https://docs.google.com/forms/d/19O1u_xepeaB7oBg-TkhX_3nV4iv8R4olLGgpXL_9Db8/edit?pli=1" className="btn btn-primary">Matricule-se</a>
          </div>

        </div>
        <div className="card" style={{ width: "22%", margin: "0 10px 20px", maxHeight: "400px", overflowY: "auto" }}>
          <img src={trans} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">TRANSFERÊNCIA </h5>
            <p className="card-text">
              Você que não se sente representado pela sua instituição de ensino; pela distância; grade curricular e até mesmo outros problemas, não se preocupe. A FSH tem a rede de apoio perfeita para lhe ajudar a se transferir. Traga sua ementa e histórico e  curse de onde parou.

            </p>
            <p className="card-text">
              Como eu faço? Entre em contato com um de nossos consultores, solicite uma pré-análise de suas ementas e histórico, os nossos coordenadores vão analisar sua grade e após isso os consultores vão te guiar a terminar a sua matrícula.
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
