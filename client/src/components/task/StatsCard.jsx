function StatsCard({ title, value, color }) {
  return (
    <div
      className={`bg-${color}-500 rounded-xl p-6 text-white shadow-lg`}
    >
      <h3 className="text-lg">{title}</h3>

      <p className="text-4xl font-bold mt-2">
        {value}
      </p>
    </div>
  );
}

export default StatsCard;