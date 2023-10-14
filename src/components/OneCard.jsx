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
  const matchHandler = (name) => {
    if (choiceTwo) return;

    choiceOne ? setChoiceTwo(name) : setChoiceOne(name);
  };

  const reset = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
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
        console.log(matched);
      } else {
        console.log("objects not equal");
      }
      setTimeout(() => {
        console.log(choiceTwo);
        reset();
      }, 1500);
    }
    console.log(matched, emoji);
  }, [choiceOne, choiceTwo, matched]);

  return (
    <div onClick={() => matchHandler(emoji)}>
      <h1 className={`${matched ? "matched" : "emojis"}`}>{emoji}</h1>
    </div>
  );
};

export default OneCard;
