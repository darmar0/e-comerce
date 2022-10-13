import styled from "styled-components";
import { ReactComponent as ShoppingCartSvg } from "../../assets/shopping-bag.svg";

export const ShoppingCartIcon = styled(ShoppingCartSvg)`
  width: 24px;
  height: 24px;
`;

export const CartIconContainer = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const ItemCount = styled.span`
  position: absolute;
  bottom: 12px;
  font-size: 10px;
  font-weight: bold;
`;

// .cart-icon-container {
//   width: 45px;
//   height: 45px;
//   position: relative;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   cursor: pointer;
//   .shopping-icon {
//     width: 24px;
//     height: 24px;
//   }
//   .item-count {
//     position: absolute;
//     bottom: 12px;
//     font-size: 10px;
//     font-weight: bold;
//   }
// }
