import { useState } from "react";
import { easyGame } from "../utils";
import { useEffect } from "react";
import OneCard from "./OneCard";

const Cards = () => {
  const [shuffledCards, setShuffledCards] = useState([]);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [cardIdOne, setCardIdOne] = useState("");
  const [cardIdTwo, setCardIdTwo] = useState("");

  const [matchedCount, setMatchedCount] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  const shuffleCards = () => {
    setGameOver(false);
    const shuffle = [...easyGame, ...easyGame]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({
        ...card,
        id: new Date().getTime() - Math.random() * Math.random() - 0.5,
      }));
    setShuffledCards(shuffle);
    console.log(shuffle);
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
                cardIdOne={cardIdOne}
                setCardIdOne={setCardIdOne}
                cardIdTwo={cardIdTwo}
                setCardIdTwo={setCardIdTwo}
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
