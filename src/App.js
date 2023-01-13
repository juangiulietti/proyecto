import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import PublicidadApp from "./components/PublicidadApp";
import Footer from "./components/Footer";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Error404 from "./components/Error404";

function App() {
  return(
    <div className="container-fluid">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path={"/"} element={<ItemListContainer/>}/>
          <Route path={"/category/:id"} element={<ItemListContainer/>}/>
          <Route path={"/item/:id"} element={<ItemDetailContainer/>}/>
          <Route path={"*"} element={<Error404/>}/>
        </Routes>
        <PublicidadApp/>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;