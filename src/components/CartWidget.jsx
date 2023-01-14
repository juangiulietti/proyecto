import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./context/CartContext";

const CartWidget = () => {
     const {cartTotal} = useContext(CartContext);

     if(cartTotal() == 0) {
        return(
            ""
        )
     }

    return(
        <Link to={"/cart"} className="btn position-relative" title="Ir al Carrito">
            <img src={"/images/basket.svg"} alt={"Carrito"} width={32}/>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{cartTotal()}</span>
        </Link>
    )
};

export default CartWidget;