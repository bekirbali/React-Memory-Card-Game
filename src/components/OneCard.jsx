import { useEffect, useState } from "react";

const OneCard = ({
  emoji,
  matched,
  setShuffledCards,
  choiceOne,
  choiceTwo,
  setChoiceOne,
  setChoiceTwo,
}) => {
  const [flip, setFlip] = useState(false);

  const matchHandler = (name) => {
    if (choiceTwo) return;
    setFlip(true);
    choiceOne ? setChoiceTwo(name) : setChoiceOne(name);
  };

  const reset = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setFlip(false);
  };

  useEffect(() => {
    if (choiceTwo) {
      if (choiceOne === choiceTwo) {
        setShuffledCards((oldCards) => {
          return oldCards.map((card) => {
            if (choiceOne === card.emoji) {
              reset();
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
      } else {
        setTimeout(() => {
          reset();
        }, 1500);
      }
    }
  }, [choiceOne, choiceTwo]);

  return (
    <div
      onClick={() => matchHandler(emoji)}
      className={`${matched ? "matched" : flip ? "flip" : "emojis"}`}
    >
      <h1>{emoji}</h1>
      <div className={` ${matched ? "matched" : "frontCard"}`}></div>
    </div>
  );
};

export default OneCard;
