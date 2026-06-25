const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3001";

async function request(path, opts = {}) {
  const res = await fetch(`${API_URL}${path}`, {
    credentials: "include",
    headers: { "Content-Type": "application/json", ...(opts.headers || {}) },
    ...opts,
  });
  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    throw new Error(body.error || `Erreur API (${res.status})`);
  }
  return res.json();
}

export const api = {
  me: () => request("/auth/me"),
  logout: () => request("/auth/logout", { method: "POST" }),
  loginUrl: () => `${API_URL}/auth/discord`,
  myCollection: () => request("/api/collection/me"),
  collectionOf: (discordId) => request(`/api/collection/${discordId}`),
  leaderboard: (by = "total") => request(`/api/leaderboard?by=${by}`),
  myTrades: () => request("/api/trades"),
};
