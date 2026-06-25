import { api } from "../api.js";

export default function Login() {
  return (
    <div className="binder-page p-10 text-center max-w-lg mx-auto mt-10">
      <h1 className="font-display text-3xl font-bold mb-3">Bienvenue au classeur !</h1>
      <p className="text-ink/70 mb-6">
        Connecte-toi avec Discord pour voir ta collection de cartes capturées sur le serveur,
        suivre tes échanges et grimper dans le classement.
      </p>
      <a
        href={api.loginUrl()}
        className="inline-block px-6 py-3 rounded-xl bg-violet text-parchment font-semibold hover:opacity-90 transition-opacity"
      >
        Se connecter avec Discord
      </a>
    </div>
  );
}
