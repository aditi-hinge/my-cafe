export default function Cart({ cart, price, totalItems }) {
  
  const thankYou=()=>{
    totalItems.length>0
    ?alert("Thank you for the purchase :)")
    :alert("Please select an item!")
  }
  
  return (
    <div id="cart-container">
      <h3 id="cart-heading">Your bill</h3>
      <div id="cart-box">
        <h4 className="total-items-heading">
          Total Items: <span className="amount">{totalItems.length}</span>
        </h4>
        <h4 className="total-items-heading">
          Total Price: <span className="amount"> ¥ {price}</span>
        </h4>
      </div>
      <div id="checkout" onClick={thankYou}>Proceed to Checkout</div>
    </div>
  );
}
