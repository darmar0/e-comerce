import { useState } from "react";
import {
  createAuthUserWidthEmailAndPassword,
  createUserDocFromAuth,
} from "../../utilites/firebase/firebase.utils";
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import "./sign-up.styles.scss";

const defaultFormFieds = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUp = () => {
  const [formFilends, setFormFields] = useState(defaultFormFieds);
  const { displayName, email, password, confirmPassword } = formFilends; //input values

  const resetFormFields = () => {
    setFormFields(defaultFormFieds);
  };

  const handeleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("password dont match");
      return;
    }
    try {
      const { user } = await createAuthUserWidthEmailAndPassword(
        email,
        password
      );
      await createUserDocFromAuth(user, { displayName: displayName });
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot create user, email already in use");
      } else {
        console.log("error creating user", error.message);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFilends, [name]: value });
  };

  return (
    <div className="sign-up-container">
      <h2> I do not have an accout?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handeleSubmit}>
        <FormInput
          label="Display name"
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />
        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <FormInput
          label="Confirm password"
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />
        <Button type="submit">Sign up</Button>
      </form>
    </div>
  );
};

export default SignUp;
