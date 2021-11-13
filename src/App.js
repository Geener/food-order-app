import "./App.css";

import OrderPageEnglish from "./english/orderPage/OrderPageEnglish";
import CartProvider from "./store/CartProvider";

function App() {
  return (
    <div
    style={{
      backgroundColor: '#333',
      height: "100%",
    }}>
        <CartProvider>
          <OrderPageEnglish />
        </CartProvider>
      </div>
  );
}

export default App;
