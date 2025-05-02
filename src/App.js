import Carousal from "./Carousal";
import "./styles.css";

export default function App() {
  const cards = [
    { title: "Card 1", description: "Description for Card 1" },
    { title: "Card 2", description: "Description for Card 2" },
    { title: "Card 3", description: "Description for Card 3" },
    { title: "Card 4", description: "Description for Card 4" },
    { title: "Card 5", description: "Description for Card 5" },
  ];

  return (
    <div>
      <Carousal cards={cards} />
    </div>
  );
}
