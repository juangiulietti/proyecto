import React from "react";
import Navbar from "./components/Navbar";
import PublicidadApp from "./components/PublicidadApp";
import Footer from "./components/Footer";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return(
    <div className="container-fluid">
      <Navbar/>
      <ItemListContainer greeting= {"No se encontraron productos!"} />
      <PublicidadApp/>
      <Footer/>
    </div>
  );
}

export default App;