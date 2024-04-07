import Header from "./componenets/Layout/Header";
import { Fragment , useState } from "react";
import Meals from "./componenets/Meals/Meals";
import Cart from "./componenets/Cart/Cart";
import CartProvider from "./Store/CartProvider";


function App() {
  // console.log("sdds");
  const [cartIsShow, setCartIsShow] = useState(false);

  const showCartHandler = () =>
  {
    setCartIsShow(true);
  }

  const hideCartHandler = () =>
  {
    setCartIsShow(false);
  }

  return (
    <CartProvider>
      {cartIsShow && <Cart onCloseCart={hideCartHandler}/>}
      <Header  onShowCart={showCartHandler}/>
          <Meals />
      </CartProvider>
    
  );
}

export default App;
