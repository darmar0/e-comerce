import {
  BackgroundImage,
  Body,
  CategoryItemContainer,
} from "./category-item.styles";
import { useNavigate } from "react-router-dom";

const CategoryItem = ({ category, id }) => {
  const { imageUrl, title } = category;
  const navigate = useNavigate();

  const onNavigate = () => navigate(`shop/${title}`);
  return (
    <CategoryItemContainer key={id} onClick={onNavigate}>
      <BackgroundImage
        className="background-image"
        // style={{ backgroundImage: `url(${imageUrl})` }} OLD WHAY
        imageUrl={imageUrl} //NEW WHAY??
      />
      <Body>
        <h2>{title}</h2>
        <p>Shop now</p>
      </Body>
    </CategoryItemContainer>
  );
};

export default CategoryItem;
