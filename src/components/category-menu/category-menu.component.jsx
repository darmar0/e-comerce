// import "../category-item/category-item.styles.scss";
import CategoryItem from "../category-item/category-item.component";
import "../../catagories.styles.scss";

const CategoryMenu = ({ categories }) => {
  return (
    <div className="catagories-container">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default CategoryMenu;
