import { useParams } from "react-router-dom";
import { useContext } from "react";
import { CategoriesContext } from "../../contexts/categories.context";
import ProductCard from "../../components/product-card/product-card.component";
import { CategoryConteiner, CategoryTitle } from "./category.style";

const Category = () => {
  const { categoryParam } = useParams();
  const { categories } = useContext(CategoriesContext);
  const products = categories[categoryParam];

  return (
    <>
      <CategoryTitle as="h2">{categoryParam.toLocaleUpperCase()}</CategoryTitle>
      <CategoryConteiner>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product}></ProductCard>
          ))}
      </CategoryConteiner>
    </>
  );
};

export default Category;
