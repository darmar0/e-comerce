import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import SignIn from "./routes/sign-in/sign-in.component";

const Shop = () => {
  return <h1>Shop page</h1>;
};
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} /> // OUTLET
        <Route path="shop" element={<Shop />} /> // OUTLET
        <Route path="sign-in" element={<SignIn />} /> // OUTLET
      </Route>
    </Routes>
  );
};

export default App;
