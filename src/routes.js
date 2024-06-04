
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./paginas/inicio";
import Sobre from "./paginas/Sobre/sobre";
import Graduacao from "./paginas/Cursos/graduacao";
import Pos from "./paginas/Cursos/pos";
import Tec from "./paginas/Cursos/tec";



function AppRoutes () {
return (

    <BrowserRouter>
    <Routes>
        <Route path= "/" element={<Inicio/>}></Route>
        <Route path= "/Sobre" element={<Sobre/>}></Route>
        <Route path= "/Graduacao" element={<Graduacao/>}></Route>
        <Route path= "/Pos" element={<Pos/>}></Route>
        <Route path= "/Tec" element={<Tec/>}></Route>
    </Routes>
    </BrowserRouter>
)

}

export default AppRoutes