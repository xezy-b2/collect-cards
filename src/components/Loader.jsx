export default function Loader({ label = "Chargement..." }) {
  return (
    <div className="flex flex-col items-center gap-3 text-parchment/80">
      <div className="w-8 h-8 border-3 border-gold border-t-transparent rounded-full animate-spin" />
      <p className="font-mono text-sm">{label}</p>
    </div>
  );
}
