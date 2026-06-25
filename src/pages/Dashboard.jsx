import { useEffect, useState } from "react";
import BinderGrid from "../components/BinderGrid.jsx";
import Loader from "../components/Loader.jsx";
import { api } from "../api.js";

export default function Dashboard({ user }) {
  const [cards, setCards] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    api.myCollection().then((r) => setCards(r.cards)).catch((e) => setError(e.message));
  }, []);

  if (error) return <p className="text-red-300">{error}</p>;
  if (!cards) return <Loader label="Ouverture de ta page de classeur..." />;

  const total = cards.reduce((sum, c) => sum + c.quantity, 0);

  return (
    <BinderGrid
      title={`Collection de ${user.username}`}
      subtitle={`${total} carte(s) au total · ${cards.length} unique(s)`}
      userCards={cards}
    />
  );
}
