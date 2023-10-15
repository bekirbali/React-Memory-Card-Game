import { useEffect, useState } from "react";

const OneCard = ({
  emoji,
  matched,
  id,
  cardIdOne,
  setCardIdOne,
  cardIdTwo,
  setCardIdTwo,
  setShuffledCards,
  choiceOne,
  choiceTwo,
  setChoiceOne,
  setChoiceTwo,
  setMatchedCount,
  matchedCount,
}) => {
  const [flip, setFlip] = useState(false);

  const matchHandler = (name, theId) => {
    if (choiceTwo) return;

    setFlip(true);
    choiceOne ? setChoiceTwo(name) : setChoiceOne(name);
  };

  const reset = () => {
    if (choiceOne === choiceTwo) {
      setChoiceOne(null);
      setChoiceTwo(null);
      setFlip(false);
    } else {
      setTimeout(() => {
        setChoiceOne(null);
        setChoiceTwo(null);
        setFlip(false);
      }, 1500);
    }
  };

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      if (choiceOne === choiceTwo) {
        setMatchedCount(matchedCount + 1);
        reset();
        setShuffledCards((oldCards) => {
          return oldCards.map((card) => {
            if (choiceOne === card.emoji) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
      } else {
        reset();
      }
    }
  }, [choiceOne, choiceTwo]);

  return (
    <div
      onClick={() => matchHandler(emoji, id)}
      className={`${matched ? "matched" : flip ? "flip" : "emojis"}`}
    >
      <h1>{emoji}</h1>
      {/* <div className={` ${matched ? "matched" : "frontCard"}`}></div> */}
    </div>
  );
};

export default OneCard;
