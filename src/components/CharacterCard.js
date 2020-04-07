import React, { useState, useEffect } from "react";
import axios from "axios";

export default function CharacterCard(props) {
  console.log(props, "this is the characterCard");

  const [showCharacter, setShowCharacter] = useState([]);
  useEffect(() => {
    const id = props.match.params.id;

    axios
      .get(`https://rickandmortyapi.com/api/character/${id}`)
      .then(response => {
        console.log(response);
        setShowCharacter([response.data]);
      })
      .catch(error => {
        console.error(error);
      });
  }, [props]);

  return (
    <div>
      {showCharacter.map(item => {
        return (
          <div key={item.id}>
            <h1
              style={{
                border: "1px solid",
                width: "57.5%",
                padding: "3px",
                borderRadius: "5px",
                backgroundColor: "lightgray"
              }}
            >
              {item.name}
            </h1>
            <p>
              <div
                className="border-style"
                style={{
                  border: "1px solid",
                  width: "58.49999%",
                  borderRadius: "5px",
                  backgroundColor: "lightgreen"
                }}
              >
                <img src={item.image} alt={item.name} />
                <b>Status:</b> {item.status} <br />
                <b>Species:</b> {item.species} <br />
                <b>Gender:</b> {item.gender} <br />
                <b>Origin:</b> {item.origin.name}
              </div>
            </p>
          </div>
        );
      })}
    </div>
  );
}
