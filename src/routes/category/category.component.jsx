import { useParams } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { CategoriesContext } from "../../contexts/categories.context";
import ProductCard from "../../components/product-card/product-card.component";
import "./category.style.scss";

const Category = () => {
  const { categoryParam } = useParams();
  const { categories } = useContext(CategoriesContext);
  const products = categories[categoryParam];

  return (
    <>
      <h2 className="category-title">{categoryParam.toLocaleUpperCase()}</h2>
      <div className="category-container">
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product}></ProductCard>
          ))}
      </div>
    </>
  );
};

export default Category;
