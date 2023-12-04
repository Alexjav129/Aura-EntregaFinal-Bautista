import "./CartWidget.scss";

const CartWidget = () => {
  const imgCarrito =
    "https://w7.pngwing.com/pngs/225/984/png-transparent-computer-icons-shopping-cart-encapsulated-postscript-shopping-cart-angle-black-shopping.png";
  return (
    <div>
      <img className="imgCarrito" src={imgCarrito} alt="Carrito de Compras" />
      <strong>7</strong>
    </div>
  );
};

export default CartWidget;
