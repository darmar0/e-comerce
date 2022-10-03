import { useContext, Fragment } from "react";
import { CategoriesContext } from "../../contexts/categories.context";
import ProductCard from "../../components/product-card/product-card.component";
import "./shop.styles.scss";

const Shop = () => {
  const { categories } = useContext(CategoriesContext);
  return (
    <>
      {Object.keys(categories).map((title) => (
        <Fragment key={title}>
          <h2>{title.toUpperCase()}</h2>
          <div className="products-container">
            {categories[title].slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product}></ProductCard>
            ))}
          </div>
        </Fragment>
      ))}
    </>
  );
};

export default Shop;
