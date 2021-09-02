import "./App.css";

import OrderPageEnglish from "./english/orderPage/OrderPageEnglish";
import CartProvider from "./store/CartProvider";

function App() {
  return (
    <CartProvider>
      <OrderPageEnglish />
    </CartProvider>
  );
}

export default App;
