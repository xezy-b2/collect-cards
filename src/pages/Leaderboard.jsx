import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "../components/Loader.jsx";
import { api } from "../api.js";

export default function Leaderboard() {
  const [by, setBy] = useState("total");
  const [rows, setRows] = useState(null);

  useEffect(() => {
    setRows(null);
    api.leaderboard(by).then((r) => setRows(r.leaderboard));
  }, [by]);

  return (
    <div className="binder-page p-6 sm:p-8">
      <div className="flex items-center justify-between mb-5">
        <h1 className="font-display text-2xl font-bold">Classement des collectionneurs</h1>
        <select
          value={by}
          onChange={(e) => setBy(e.target.value)}
          className="bg-parchment-dark text-ink rounded-lg px-3 py-1.5 text-sm font-mono"
        >
          <option value="total">Total de cartes</option>
          <option value="unique">Cartes uniques</option>
        </select>
      </div>

      {!rows ? (
        <Loader label="Calcul du classement..." />
      ) : !rows.length ? (
        <p className="text-ink/60 italic">Personne n'a encore capturé de carte.</p>
      ) : (
        <ol className="space-y-2">
          {rows.map((r, i) => (
            <li key={r.discordId} className="flex items-center justify-between bg-parchment-dark/60 rounded-lg px-4 py-2.5">
              <span className="flex items-center gap-3">
                <span className="font-mono text-ink/50 w-6">{i + 1}</span>
                <Link to={`/u/${r.discordId}`} className="font-semibold hover:underline">{r.username}</Link>
              </span>
              <span className="font-mono font-bold">{by === "unique" ? r.unique : r.total}</span>
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}
