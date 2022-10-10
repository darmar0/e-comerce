import { BaseButton, GoogleSignInBtn, InvertedBtn } from "./button.styles";

export const BUTTON_TYPE_CLASSES = {
  base: "base",
  google: "google-sign-in",
  inverted: "inverted",
};

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) =>
  ({
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.google]: GoogleSignInBtn,
    [BUTTON_TYPE_CLASSES.inverted]: InvertedBtn,
  }[buttonType]);

const Button = ({ children, buttonType, ...otherProps }) => {
  console.log(buttonType);
  const CustomButton = getButton(buttonType);
  return <CustomButton {...otherProps}>{children}</CustomButton>;
};
export default Button;

// className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
