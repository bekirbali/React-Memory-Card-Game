import { useState } from "react";
import { easyGame } from "../utils";
import { useEffect } from "react";
import OneCard from "./OneCard";

const Cards = () => {
  const [shuffledCards, setShuffledCards] = useState([]);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);

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
          <OneCard
            {...item}
            setShuffledCards={setShuffledCards}
            choiceOne={choiceOne}
            choiceTwo={choiceTwo}
            setChoiceOne={setChoiceOne}
            setChoiceTwo={setChoiceTwo}
          />
          {/* <div className="frontCard"></div> */}
        </div>
      ))}
    </div>
  );
};

export default Cards;
