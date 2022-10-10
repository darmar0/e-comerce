import styled from "styled-components";
import {
  BaseButton,
  GoogleSignInBtn,
  InvertedBtn,
} from "../button/button.styles";

export const CartDropDownContainer = styled.div`
  width: 240px;
  height: 340px;
  position: absolute;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  top: 90px;
  right: 40px;
  z-index: 5;
  background-color: white;
  ${BaseButton} {
    margin-top: auto;
  }
`;
export const EmptyMessage = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;

export const CartItems = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;

// .cart-dropdown-container {
//   width: 240px;
//   height: 340px;
//   position: absolute;
//   display: flex;
//   flex-direction: column;
//   padding: 20px;
//   border: 1px solid black;
//   top: 90px;
//   right: 40px;
//   z-index: 5;
//   background-color: white;
//   .cart-items {
//     height: 240px;
//     display: flex;
//     flex-direction: column;
//     overflow: scroll;
//   }
//   button {
//     margin-top: auto;
//   }
//   .nav-link {
//     text-decoration: none;
//     color: white !important;
//   }
// }
