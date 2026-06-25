const RARITY_TIERS = {
  "Common": { glow: "ring-white/10", label: "Commune" },
  "Uncommon": { glow: "ring-teal/40", label: "Peu commune" },
  "Rare": { glow: "ring-teal/60", label: "Rare" },
  "Rare Holo": { glow: "ring-violet/60", label: "Rare Holo" },
  "Double Rare": { glow: "ring-violet/80", label: "Double Rare" },
  "Ultra Rare": { glow: "ring-gold/70", label: "Ultra Rare" },
  "Illustration Rare": { glow: "ring-gold/80", label: "Illustration Rare" },
  "Special Illustration Rare": { glow: "ring-gold", label: "Illustration Spéciale" },
  "Hyper Rare": { glow: "ring-gold", label: "Hyper Rare" },
};

const RARE_THRESHOLD = ["Rare Holo", "Double Rare", "Ultra Rare", "Illustration Rare", "Special Illustration Rare", "Hyper Rare"];

export default function CardSleeve({ card, quantity }) {
  const tier = RARITY_TIERS[card.rarity] || { glow: "ring-white/10", label: card.rarity || "Inconnue" };
  const isShiny = RARE_THRESHOLD.includes(card.rarity);

  return (
    <div className={`relative overflow-hidden rounded-xl bg-ink-dark/5 shadow-sleeve ring-2 ${tier.glow} p-2 ${isShiny ? "foil-shimmer" : ""}`}>
      {quantity > 1 && (
        <span className="absolute top-1.5 right-1.5 z-10 bg-ink text-gold text-xs font-mono font-bold px-1.5 py-0.5 rounded-md">
          ×{quantity}
        </span>
      )}
      <img src={card.imageUrl} alt={card.name} className="w-full rounded-lg" loading="lazy" />
      <p className="mt-1.5 text-xs font-semibold truncate" title={card.name}>{card.name}</p>
      <p className="text-[11px] font-mono text-ink/60">{tier.label}</p>
    </div>
  );
}
