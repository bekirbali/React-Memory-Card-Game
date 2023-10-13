import { useState } from "react";
import { easyGame } from "../utils";
import { useEffect } from "react";

const Cards = () => {
  const [shuffledCards, setShuffledCards] = useState([]);

  const shuffleCards = () => {
    const shuffle = [...easyGame, ...easyGame].sort(() => Math.random() - 0.5);
    setShuffledCards(shuffle);
    console.log(shuffledCards);
  };

  useEffect(() => {
    shuffleCards();
  }, []);

  return (
    <div className="cards">
      {shuffledCards.map((item, index) => (
        <div key={index}>
          <p>{item.emoji} </p>
          <div className="frontCard"></div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
