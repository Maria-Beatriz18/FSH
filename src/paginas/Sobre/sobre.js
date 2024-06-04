import Navbar from "../../Components/Navbar";
import About from "../../Components/About";
import Footer from "../../Components/Footer";
import Work from "../../Components/Work";



function Sobre() {

    return (
        <div className="App">
            <Navbar />
            <About/>
            <Work/>
            <Footer />
        </div>
    )
}

export default Sobre;