// RegisterPage.jsx
import { api } from "../utilities.jsx";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const SignUpForm = ({ user, setUser }) => {
  // ...
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const signUp = async (e) => {
    e.preventDefault();
    let response = await api.post("users/signup/", {
      email: userName,
      password: password,
    });
    let user = response.data.user;
    let token = response.data.token;
    // Store the token securely (e.g., in localStorage or HttpOnly cookies)
    localStorage.setItem("token", token);
    api.defaults.headers.common["Authorization"] = `Token ${token}`;
    // set the user using with useContext to allow all other pages that need user information
    setUser(user);
    navigate("/");
  };

  return (
    <form onSubmit={(e)=>signUp(e)}>
      <input onChange={(e) => setUserName(e.target.value)} value={userName} />
      <input onChange={(e) => setPassword(e.target.value)} value={password} />
      <button type="submit">Sign Up</button>
    </form>
  );
};
