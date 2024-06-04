import Home from "../../Components/Home";
import About from "../../Components/About";
import Work from "../../Components/Work";
import Cursos from "../../Components/Cursos";
import Footer from "../../Components/Footer";


function Inicio (){

    return(
     <div className="App">
      <Home />
      {/* <About /> */}
      <Cursos/>
      <Work />
      <Footer />
    </div>
    )
}

export default Inicio;