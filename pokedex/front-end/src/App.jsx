import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Outlet } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { SignUpForm } from "./components/SignUp";
import { useState } from "react";

export default function App() {
  const [user, setUser] = useState(null)
  return (
    <Container>
      <Row style={{ textAlign: "center" }}>
        <h1>POKEDEX {user ? user.email: null}</h1>
      </Row>
      <SignUpForm user = {user} setUser={setUser}/>
      <Navbar />
      <Outlet/>
    </Container>
  );
}
