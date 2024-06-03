
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./paginas/inicio";
import Sobre from "./paginas/Sobre/sobre";


function AppRoutes () {
return (

    <BrowserRouter>
    <Routes>
        <Route path= "/" element={<Inicio/>}></Route>
        <Route path= "/Sobre" element={<Sobre/>}></Route>
    </Routes>
    </BrowserRouter>
)

}

export default AppRoutes