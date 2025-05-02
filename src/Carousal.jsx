import { useState } from "react";

function Carousal(props) {
  const { cards } = props;

  const [cardsIndex, setCardsIndex] = useState(0);

  const handlePrev = () => {
    setCardsIndex((prev) => prev - 1);
  };

  const handleNext = () => {
    setCardsIndex((prev) => prev + 1);
  };

  const carCards = cards[cardsIndex];
  return (
    <div className="carousal-container">
      <h1>{carCards.title}</h1>
      <h3>{carCards.description}</h3>
      <div className="nav-buttons">
        <button onClick={handlePrev} disabled={cardsIndex === 0}>
          Prev
        </button>
        <span>
          {cardsIndex + 1} of {cards.length}
        </span>
        <button onClick={handleNext} disabled={cardsIndex + 1 === cards.length}>
          Next
        </button>
      </div>
    </div>
  );
}

export default Carousal;
