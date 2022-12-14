import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import Authetication from "./routes/sign-in/authetication.component";
import Shop from "./routes/shop/shop.component";
import Checkout from "./routes/checkout/checkout.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} /> // OUTLET
        <Route path="shop/*" element={<Shop />} /> // OUTLET * MATCHES
        SHOP/ENYTHING
        <Route path="auth" element={<Authetication />} /> // OUTLET
        <Route path="checkout" element={<Checkout />} /> // OUTLET
      </Route>
    </Routes>
  );
};

export default App;
