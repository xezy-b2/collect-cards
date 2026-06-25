import CardSleeve from "./CardSleeve.jsx";

export default function BinderGrid({ title, subtitle, userCards }) {
  return (
    <div className="binder-page p-6 sm:p-8">
      <div className="mb-5">
        <h1 className="font-display text-2xl font-bold">{title}</h1>
        {subtitle && <p className="text-ink/60 text-sm mt-1">{subtitle}</p>}
      </div>

      {!userCards.length ? (
        <p className="text-ink/60 italic">Aucune carte dans cette page du classeur pour l'instant.</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {userCards.map((uc) => (
            <CardSleeve key={uc.id} card={uc.card} quantity={uc.quantity} />
          ))}
        </div>
      )}
    </div>
  );
}
