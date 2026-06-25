import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BinderGrid from "../components/BinderGrid.jsx";
import Loader from "../components/Loader.jsx";
import { api } from "../api.js";

export default function Profile() {
  const { discordId } = useParams();
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    api.collectionOf(discordId).then(setData).catch((e) => setError(e.message));
  }, [discordId]);

  if (error) return <p className="text-red-300">{error}</p>;
  if (!data) return <Loader label="Recherche de ce membre..." />;
  if (!data.username) return <p className="text-parchment/80">Ce membre n'a pas encore de collection.</p>;

  const total = data.cards.reduce((sum, c) => sum + c.quantity, 0);

  return (
    <BinderGrid
      title={`Collection de ${data.username}`}
      subtitle={`${total} carte(s) au total · ${data.cards.length} unique(s)`}
      userCards={data.cards}
    />
  );
}
