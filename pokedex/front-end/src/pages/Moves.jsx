import Row from "react-bootstrap/esm/Row";
import { useEffect, useState } from "react";
import {api} from "../utilities"


export const Moves = () => {
  const [moves, setMoves] = useState([]);

  const getAllMoves = async () => {
    let response = await api
      .get("moves/")
      .catch((err) => {
        console.log(err);
        alert("something went wrong");
      });
    setMoves(response.data);
  };

  useEffect(() => {
    getAllMoves();
  }, []);

  return (
    <Row style={{ padding: "0 10vmin" }}>
      <h1 style={{ textAlign: "center" }}>Moves</h1>
      <ul>
        {moves.map((move) => (
          <li key={move.id}>
            Name: {move.name}
            <br />
            Power: {move.power}
            <br />
            Accuracy: {move.accuracy}
            <ul>
              Pokemon
              {move.pokemon.map((poke) => (
                <li>{poke}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </Row>
  );
};
