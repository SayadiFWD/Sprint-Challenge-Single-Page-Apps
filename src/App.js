import React from "react";
import { Route } from "react-router-dom";
import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage";
import CharacterList from "./components/CharacterList";

export default function App() {
  return (
    <main data-testid="app">
      <Route path="/" component={Header} />
      <Route exact path="/" component={WelcomePage} />
      <Route path="/character" component={CharacterList} />
    </main>
  );
}
