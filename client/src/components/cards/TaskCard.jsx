import {
  FaEdit,
  FaTrash,
  FaCalendarAlt,
} from "react-icons/fa";

function TaskCard({
  task,
  onEdit,
  onDelete,
}) {
  const priorityColors = {
    High: "bg-red-100 text-red-600",
    Medium: "bg-yellow-100 text-yellow-600",
    Low: "bg-green-100 text-green-600",
  };

  const statusColors = {
    Pending: "bg-orange-100 text-orange-600",
    "In Progress": "bg-blue-100 text-blue-600",
    Completed: "bg-green-100 text-green-600",
  };

  return (
    <div
      className="
        bg-white
        rounded-2xl
        shadow-md
        hover:shadow-xl
        transition-all
        duration-300
        p-6
        flex
        flex-col
        gap-4
      "
    >
      {/* Header */}

      <div className="flex justify-between items-start gap-4">
        <div>
          <h2 className="text-xl font-bold text-gray-800">
            {task.title}
          </h2>

          <p className="text-gray-500 text-sm mt-1">
            {task.category}
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
              priorityColors[task.priority] ||
              "bg-gray-100 text-gray-600"
            }
          `}
        >
          {task.priority}
        </span>
      </div>

      {/* Description */}

      <p className="text-gray-600 leading-relaxed">
        {task.description}
      </p>

      {/* Footer */}

      <div className="flex justify-between items-center">
        <span
          className={`
            px-3
            py-1
            rounded-full
            text-xs
            font-medium
            ${
              statusColors[task.status] ||
              "bg-gray-100 text-gray-600"
            }
          `}
        >
          {task.status}
        </span>

        <div className="flex items-center gap-2 text-gray-500 text-sm">
          <FaCalendarAlt />

          {task.deadline || "No Deadline"}
        </div>
      </div>

      {/* Actions */}

      <div className="flex justify-end gap-3 pt-2 border-t">
        <button
          onClick={() => onEdit(task)}
          className="
            p-2
            rounded-lg
            bg-blue-50
            hover:bg-blue-100
            transition
          "
        >
          <FaEdit className="text-blue-600" />
        </button>

        <button
          onClick={() => onDelete(task.id)}
          className="
            p-2
            rounded-lg
            bg-red-50
            hover:bg-red-100
            transition
          "
        >
          <FaTrash className="text-red-600" />
        </button>
      </div>
    </div>
  );
}

export default TaskCard;
