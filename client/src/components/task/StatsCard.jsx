import {
  FaTasks,
  FaCheckCircle,
  FaClock,
  FaChartLine,
} from "react-icons/fa";

function StatsCard({ title, value, color }) {
  const bgColors = {
    blue: "from-blue-500 to-indigo-600",
    green: "from-green-500 to-emerald-600",
    red: "from-red-500 to-pink-600",
    purple: "from-purple-500 to-indigo-600",
  };

  const icons = {
    "Total Tasks": <FaTasks size={26} />,
    Completed: <FaCheckCircle size={26} />,
    Pending: <FaClock size={26} />,
    Progress: <FaChartLine size={26} />,
  };

  return (
    <div
      className={`
      bg-gradient-to-br
      ${bgColors[color]}
      rounded-2xl
      p-6
      shadow-xl
      hover:scale-105
      duration-300
      cursor-pointer
      `}
    >
      <div className="flex justify-between items-center">

        <div>

          <p className="text-white/80 text-sm">

            {title}

          </p>

          <h2 className="text-4xl font-bold text-white mt-3">

            {value}

          </h2>

        </div>

        <div
          className="
          w-14
          h-14
          rounded-xl
          bg-white/20
          flex
          items-center
          justify-center
          text-white
          "
        >
          {icons[title]}
        </div>

      </div>
    </div>
  );
}

export default StatsCard;