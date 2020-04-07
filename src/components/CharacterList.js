import React, { useEffect, useState } from "react";
import { Route, Link } from "react-router-dom";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm";
import styled from 'styled-components'

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [character, setCharacter] = useState([]);
  const [filterCharacter, setFilterCharacter] = useState([]);

  const search = character => {
    setFilterCharacter(character);
  };
  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios.get("https://rickandmortyapi.com/api/character/").then(response => {
      console.log(response.data.results);
      setCharacter(response.data.results);
      setFilterCharacter(response.data.results);
    });
  }, []);

  const ListContainer = styled.div`
    display: flex;
  `;

  const CharacterInfo = styled.div`
    width: 50%;
  `;

  const CharacterNamesContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
  `;

  return (
    <section className="character-list">
      <ListContainer>
        <CharacterNamesContainer>
          <SearchForm search={search} character={character} />
          {filterCharacter.map(item => {
            return (
              <div key={item.id}>
                <Link
                  to={`/character/${item.id}`}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <h3>{item.name}</h3>
                </Link>
              </div>
            );
          })}
        </CharacterNamesContainer>
        <CharacterInfo>
          <Route
            path="/character/:id"
            component={props => <CharacterCard {...props} info={character} />}
          />
        </CharacterInfo>
      </ListContainer>
    </section>
  );
}
