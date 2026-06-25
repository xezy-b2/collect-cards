import { useEffect, useState } from "react";
import Loader from "../components/Loader.jsx";
import { api } from "../api.js";

const STATUS_LABEL = { PENDING: "En attente", ACCEPTED: "Acceptée", DECLINED: "Refusée", CANCELLED: "Annulée" };

export default function Trades() {
  const [trades, setTrades] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    api.myTrades().then((r) => setTrades(r.trades)).catch((e) => setError(e.message));
  }, []);

  if (error) return <p className="text-red-300">{error}</p>;
  if (!trades) return <Loader label="Récupération de tes échanges..." />;

  return (
    <div className="binder-page p-6 sm:p-8">
      <h1 className="font-display text-2xl font-bold mb-2">Tes échanges</h1>
      <p className="text-ink/60 text-sm mb-5">
        Les échanges se proposent et s'acceptent depuis Discord avec <code className="font-mono">/echange</code>.
        Cette page te permet juste de suivre leur historique.
      </p>

      {!trades.length ? (
        <p className="text-ink/60 italic">Aucun échange pour l'instant.</p>
      ) : (
        <ul className="space-y-2">
          {trades.map((t) => (
            <li key={t.id} className="flex items-center justify-between bg-parchment-dark/60 rounded-lg px-4 py-2.5">
              <span className="text-sm">
                <strong>{t.initiator.username}</strong> ⇄ <strong>{t.receiver.username}</strong> —{" "}
                {t.items.map((it) => it.card.name).join(" / ")}
              </span>
              <span className="font-mono text-xs px-2 py-1 rounded bg-ink text-gold">{STATUS_LABEL[t.status]}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
