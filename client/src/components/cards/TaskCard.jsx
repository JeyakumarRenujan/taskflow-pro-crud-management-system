import {
  FaEdit,
  FaTrash,
  FaCalendarAlt,
} from "react-icons/fa";

import { motion } from "framer-motion";

function TaskCard({
  task,
  onEdit,
  onDelete,
}) {
  const priorityColors = {
    High: "bg-red-100 text-red-600",
    Medium: "bg-yellow-100 text-yellow-700",
    Low: "bg-green-100 text-green-700",
  };

  const statusColors = {
    Pending: "bg-orange-100 text-orange-600",
    "In Progress":
      "bg-blue-100 text-blue-600",
    Completed:
      "bg-green-100 text-green-600",
  };

  return (
    <motion.div
      whileHover={{
        y: -6,
        scale: 1.01,
      }}
      transition={{
        duration: 0.25,
      }}
      className="
        bg-white
        rounded-3xl
        shadow-lg
        border
        border-[var(--border)]
        p-6
        flex
        flex-col
        gap-5
      "
    >
      {/* Header */}

      <div className="flex justify-between gap-4">
        <div>
          <h2
            className="
              text-xl
              font-bold
              text-[var(--text-primary)]
            "
          >
            {task.title}
          </h2>

          <p
            className="
              text-sm
              text-[var(--text-secondary)]
              mt-1
            "
          >
            {task.category ||
              "General"}
          </p>
        </div>

        <span
          className={`
            px-3
            py-1
            rounded-full
            text-xs
            font-semibold
            ${
              priorityColors[
                task.priority
              ] ||
              "bg-gray-100 text-gray-600"
            }
          `}
        >
          {task.priority}
        </span>
      </div>

      {/* Description */}

      <p
        className="
          text-[var(--text-secondary)]
          leading-relaxed
          line-clamp-3
        "
      >
        {task.description}
      </p>

      {/* Status & Deadline */}

      <div className="flex justify-between items-center">
        <span
          className={`
            px-3
            py-1
            rounded-full
            text-xs
            font-medium
            ${
              statusColors[
                task.status
              ] ||
              "bg-gray-100 text-gray-600"
            }
          `}
        >
          {task.status}
        </span>

        <div
          className="
            flex
            items-center
            gap-2
            text-xs
            text-gray-500
            bg-gray-100
            px-3
            py-2
            rounded-full
          "
        >
          <FaCalendarAlt />

          {task.deadline ||
            "No Deadline"}
        </div>
      </div>

      {/* Actions */}

      <div
        className="
          pt-4
          border-t
          border-[var(--border)]
          flex
          justify-end
          gap-3
        "
      >
        <button
          onClick={() =>
            onEdit(task)
          }
          className="
            w-10
            h-10
            rounded-xl
            bg-blue-50
            hover:bg-blue-100
            flex
            justify-center
            items-center
            transition
          "
        >
          <FaEdit className="text-blue-600" />
        </button>

        <button
          onClick={() =>
            onDelete(task.id)
          }
          className="
            w-10
            h-10
            rounded-xl
            bg-red-50
            hover:bg-red-100
            flex
            justify-center
            items-center
            transition
          "
        >
          <FaTrash className="text-red-600" />
        </button>
      </div>
    </motion.div>
  );
}

export default TaskCard;
