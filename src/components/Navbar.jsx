import { Link, useNavigate } from "react-router-dom";
import { api } from "../api.js";

export default function Navbar({ user }) {
  const navigate = useNavigate();

  async function handleLogout() {
    await api.logout();
    window.location.href = "/";
  }

  return (
    <header className="border-b border-white/10">
      <div className="max-w-5xl mx-auto px-4 sm:px-8 py-4 flex items-center justify-between">
        <Link to="/" className="font-display text-xl font-bold text-gold tracking-tight">
          📒 Pokédex du Serveur
        </Link>

        <nav className="flex items-center gap-5 text-sm font-medium">
          {user && (
            <>
              <Link to="/dashboard" className="hover:text-gold transition-colors">Ma collection</Link>
              <Link to="/trades" className="hover:text-gold transition-colors">Échanges</Link>
            </>
          )}
          <Link to="/leaderboard" className="hover:text-gold transition-colors">Classement</Link>

          {user ? (
            <button onClick={handleLogout} className="px-3 py-1.5 rounded-lg bg-ink-light hover:bg-ink-dark transition-colors">
              Déconnexion
            </button>
          ) : (
            <a href={api.loginUrl()} className="px-3 py-1.5 rounded-lg bg-gold text-ink font-semibold hover:opacity-90 transition-opacity">
              Se connecter
            </a>
          )}
        </nav>
      </div>
    </header>
  );
}
