import {
  FaEdit,
  FaTrash,
  FaCalendarAlt,
} from "react-icons/fa";

function TaskCard({ task }) {
  const priorityColors = {
    High: "bg-red-500",
    Medium: "bg-yellow-500",
    Low: "bg-green-500",
  };

  return (
    <div
      className="
      bg-slate-900
      border
      border-slate-800
      rounded-2xl
      p-6
      shadow-xl
      hover:border-indigo-500
      hover:shadow-indigo-500/20
      transition-all
      duration-300
      "
    >
      {/* Header */}

      <div className="flex justify-between items-start">

        <div>

          <h3 className="text-white text-xl font-bold">

            {task.title}

          </h3>

          <p className="text-slate-400 mt-2">

            {task.description}

          </p>

        </div>

        <span
          className={`
          ${priorityColors[task.priority]}
          px-4
          py-1
          rounded-full
          text-xs
          font-semibold
          text-white
          `}
        >
          {task.priority}
        </span>

      </div>

      {/* Footer */}

      <div className="flex justify-between items-center mt-8">

        <div className="flex items-center gap-2 text-slate-500">

          <FaCalendarAlt />

          <span className="text-sm">

            Due: 30 Jun 2026

          </span>

        </div>

        <div className="flex gap-3">

          <button
            className="
            w-10
            h-10
            rounded-lg
            bg-slate-800
            hover:bg-indigo-600
            duration-300
            flex
            items-center
            justify-center
            "
          >

            <FaEdit className="text-white" />

          </button>

          <button
            className="
            w-10
            h-10
            rounded-lg
            bg-slate-800
            hover:bg-red-500
            duration-300
            flex
            items-center
            justify-center
            "
          >

            <FaTrash className="text-white" />

          </button>

        </div>

      </div>

    </div>
  );
}

export default TaskCard;