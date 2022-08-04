import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import Authetication from "./routes/sign-in/authetication.component";

const Shop = () => {
  return <h1>Shop page</h1>;
};
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} /> // OUTLET
        <Route path="shop" element={<Shop />} /> // OUTLET
        <Route path="auth" element={<Authetication />} /> // OUTLET
      </Route>
    </Routes>
  );
};

export default App;
