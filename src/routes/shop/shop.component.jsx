import { Route, Routes } from "react-router-dom";
import CategoriesPreview from "../categories-preview/categories-oreview.component";
import Category from "../category/category.component";
import "./shop.styles.scss";

const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":categoryParam" element={<Category />} />
    </Routes>
  );
};

export default Shop;
