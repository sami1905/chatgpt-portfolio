import React from "react";
import "./App.css";
import TextSlider from "./component/TextSlider";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Mein Portfolio als Software-Entwickler</h1>
        <p>Referenzen und Fähigkeiten</p>
      </header>
      <section>
        <h2>Projekte</h2>
        <ul>
          <li>Projekt 1</li>
          <li>Projekt 2</li>
          <li>Projekt 3</li>
        </ul>
        <h2>Fähigkeiten</h2>
        <ul>
          <li>Skill 1</li>
          <li>Skill 2</li>
          <li>Skill 3</li>
        </ul>
      </section>
      <section>
        <h2>Diashow</h2>
        <TextSlider />
      </section>
      <section>
        <h2>Kontaktiere mich</h2>
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" />
          <label htmlFor="email">E-Mail:</label>
          <input type="email" id="email" />
          <label htmlFor="message">Nachricht:</label>
          <textarea id="message"></textarea>
          <button type="submit">Absenden</button>
        </form>
      </section>
    </div>
  );
}

export default App;
