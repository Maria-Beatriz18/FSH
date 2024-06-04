import "./App.css";
import "./paginas/Cursos/tec.module.css"
import Home from "./Components/Home";
import About from "./Components/About";
import Work from "./Components/Work";
import Cursos from "./Components/Cursos";
import Footer from "./Components/Footer";
import AppRoutes from "./routes";

function App() {
  return (
    // <div className="App">
    //   <Home />
    //   <About />
    //   <Work />
    //   <Cursos/>
    //   <Footer />
    // </div>

    <AppRoutes/>
  );
}

export default App;