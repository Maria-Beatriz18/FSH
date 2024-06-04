import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import "./tec.module.css"


function Tec (){

    return(
     <div className="App">
      <Navbar/>
      <section>
        <div className="container-tec"> {/* Container principal */}
          <div className="image-curso">
            <img src="https://www.imagemnl.com/" alt="Imagem do curso" /> {/* Insira a URL da imagem */}
          </div>
          <div className="texto-curso">
            <h2>Título do Curso</h2> {/* Altere para o título real do curso */}
            <p>
              Breve descrição do curso, detalhando os principais pontos abordados.
            </p>
          </div>
          <button className="btn-curso">Saiba Mais</button> {/* Altere o texto do botão */}
        </div>
      </section>
      <Footer />
    </div>
    )
}

export default Tec;