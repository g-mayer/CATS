import React, { useState, useEffect } from "react";

import "./App.css";

function App() {
  useEffect(() => {
    fetchItems();
  }, []);
  const [items, setItems] = useState([]);
  const changeFact = () => {
    function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
    }
    const item = items[0].facts[getRandomInt(0, 101)];
    document.getElementById("fact").innerHTML = item;
  };
  const changeCatFact = () => {
    function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
    }
    const item = items[1].all[getRandomInt(0, 257)];
    document.getElementById("catFact").innerHTML = item.text;
  };
  const fetchItems = async () => {
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const catUrl = "https://cat-fact.herokuapp.com/facts?number=100";
    const dogUrl = "http://dog-api.kinduff.com/api/facts?number=256";

    const catData = await fetch(proxyUrl + catUrl);
    const dogData = await fetch(proxyUrl + dogUrl);

    const dogFacts = await dogData.json();
    const catFacts = await catData.json();
    // setItems(items);
    const data = [dogFacts, catFacts]
    setItems(data)
    console.log("the data has been set")
  };

  return (
    <>
    <center><h1>CATS&dogs</h1></center>
    <div className="facts-container">
    <div className="App">
      <center>
        <h2>Here's the Dog fact</h2>
      </center>
      <pre></pre>
      <div id="fact" className="facts"></div>
      <button id="bigbutton" onClick={changeFact}>
        <h3>Change the Fact</h3>
      </button>
    </div>
    <div className="App">
      <center>
        <h2>Here's the Cat fact</h2>
      </center>
      <pre></pre>
      <div id="catFact" className="facts"></div>
      <button id="bigbutton" onClick={changeCatFact}>
        <h3>Change the Fact</h3>
      </button>
    </div>
    </div>
   
  </>
  );
}

export default App;
