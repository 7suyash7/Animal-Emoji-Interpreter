import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "🐰": " Rabbit",
  "🙈": "See No Evil Monkey",
  "🐶": "Dog",
  "🙊": "Speak No Evil Monkey",
  "🐍": "Snake",
  "🐱": "Cat",
  "🐐": "Goat",
  "🐝": "HoneyBee",
  "🐼": "Panda",
  "🐻": "Bear",
  "🐷": "Pig",
  "🦄": "Unicorn",
  "🐘": "Elephant",
  "🐬": "Dolphin",
  "🐊": "Crocodile",
  "🐎": "Horse"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1 style={{ color: "red" }}>Animal Emoji Interpreter</h1>

      <h2> {meaning} </h2>

      <h3 style={{ fontSize: "2rem", color: "red" }}>Emojis We Know 👇</h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
