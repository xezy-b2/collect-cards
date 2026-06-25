import { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Loader from "./components/Loader.jsx";
import Login from "./pages/Login.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Profile from "./pages/Profile.jsx";
import Leaderboard from "./pages/Leaderboard.jsx";
import Trades from "./pages/Trades.jsx";
import { api } from "./api.js";

export default function App() {
  const [user, setUser] = useState(undefined); // undefined = chargement, null = déconnecté

  useEffect(() => {
    api.me().then((r) => setUser(r.user)).catch(() => setUser(null));
  }, []);

  if (user === undefined) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader label="Ouverture du classeur..." />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar user={user} />
      <main className="max-w-5xl mx-auto px-4 sm:px-8 py-8">
        <Routes>
          <Route path="/" element={user ? <Navigate to="/dashboard" /> : <Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={user ? <Dashboard user={user} /> : <Navigate to="/" />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/trades" element={user ? <Trades /> : <Navigate to="/" />} />
          <Route path="/u/:discordId" element={<Profile />} />
        </Routes>
      </main>
    </div>
  );
}
