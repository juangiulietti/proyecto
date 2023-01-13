import React from "react";
import ItemCount from "./ItemCount";

const ItemDetail = ({item}) => {
    return(
        <div className=" my-5">
            <div className="col-md-6 offset-md-3 text-center">
                <img src={item.imagen} className="img-fluid" alt={item.nombre}/>
                <h1>{item.nombre}</h1>
                <p>{item.descripcion}</p>
                <p><b>{item.precio}</b></p>
            </div>
            <ItemCount stockItem={10}/>
        </div>
    )
};

export default ItemDetail;