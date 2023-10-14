import { useState } from "react";
import { easyGame } from "../utils";
import { useEffect } from "react";
import OneCard from "./OneCard";

const Cards = () => {
  const [shuffledCards, setShuffledCards] = useState([]);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);

  const [matchedCount, setMatchedCount] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  const shuffleCards = () => {
    setGameOver(false);
    const shuffle = [...easyGame, ...easyGame].sort(() => Math.random() - 0.5);
    setShuffledCards(shuffle);
    console.log(shuffledCards);
  };

  useEffect(() => {
    if (matchedCount === 6) {
      setTimeout(() => {
        setGameOver(true);
      }, 1000);
    }
  }, [matchedCount]);

  return (
    <>
      {gameOver ? (
        <button onClick={shuffleCards}>clickMe</button>
      ) : (
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
                shuffleCards={shuffleCards}
                matchedCount={matchedCount}
                setMatchedCount={setMatchedCount}
              />
              {/* <div className="frontCard"></div> */}
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Cards;
