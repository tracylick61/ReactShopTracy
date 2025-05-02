export function Cart({ quantity, handleBasketShow }) {
  return (
    <div className="cart-container">
      <div className="cart" onClick={handleBasketShow}>
        <i className="material-icons">shopping_basket</i>
        {quantity > 0 && (
          <span className="cart-quantity">{quantity}</span>
        )}
      </div>
    </div>
  );
}
