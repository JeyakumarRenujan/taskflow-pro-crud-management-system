import { useEffect, useMemo, useState } from "react";
import {
  FaPlus,
  FaSearch,
  FaSyncAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";

import {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
} from "../../services/taskService";

import TaskCard from "../../components/cards/TaskCard";
import TaskModal from "../../components/modals/TaskModal";

function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] =
    useState("All");

  const [openModal, setOpenModal] =
    useState(false);

  const [selectedTask, setSelectedTask] =
    useState(null);

  const loadTasks = async () => {
    try {
      setLoading(true);

      const data = await getTasks();

      setTasks(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadTasks();
  }, []);

  const handleCreateTask = async (
    formData
  ) => {
    await createTask(formData);

    setOpenModal(false);

    loadTasks();
  };

  const handleEditTask = async (
    formData
  ) => {
    await updateTask(
      selectedTask.id,
      formData
    );

    setOpenModal(false);

    setSelectedTask(null);

    loadTasks();
  };

  const handleDeleteTask = async (
    id
  ) => {
    if (
      !window.confirm(
        "Delete this task?"
      )
    )
      return;

    await deleteTask(id);

    loadTasks();
  };

  const filteredTasks = useMemo(() => {
    return tasks.filter((task) => {
      const matchesSearch =
        task.title
          .toLowerCase()
          .includes(
            search.toLowerCase()
          ) ||
        task.description
          ?.toLowerCase()
          .includes(
            search.toLowerCase()
          );

      const matchesStatus =
        statusFilter === "All" ||
        task.status === statusFilter;

      return (
        matchesSearch &&
        matchesStatus
      );
    });
  }, [tasks, search, statusFilter]);

  return (
    <div className="space-y-8">
      {/* Header */}

      <div
        className="
          flex
          flex-col
          lg:flex-row
          justify-between
          lg:items-center
          gap-5
        "
      >
        <div>
          <h1 className="text-4xl font-bold">
            My Tasks
          </h1>

          <p className="text-gray-500 mt-2">
            Organize and manage your
            daily work efficiently.
          </p>
        </div>

        <button
          onClick={() => {
            setSelectedTask(null);
            setOpenModal(true);
          }}
          className="
            flex
            items-center
            gap-2
            bg-[var(--primary)]
            hover:bg-[var(--primary-hover)]
            text-white
            px-6
            py-3
            rounded-2xl
            shadow-lg
            transition-all
          "
        >
          <FaPlus />

          Add Task
        </button>
      </div>

      {/* Search */}

      <div
        className="
          bg-white
          rounded-3xl
          p-5
          shadow-lg
          flex
          flex-col
          lg:flex-row
          gap-4
        "
      >
        <div className="relative flex-1">
          <FaSearch
            className="
              absolute
              left-4
              top-1/2
              -translate-y-1/2
              text-gray-400
            "
          />

          <input
            type="text"
            placeholder="Search tasks..."
            value={search}
            onChange={(e) =>
              setSearch(
                e.target.value
              )
            }
            className="
              w-full
              pl-12
              pr-4
              py-3
              rounded-2xl
              border
              border-[var(--border)]
              outline-none
              focus:ring-4
              focus:ring-[var(--accent)]
            "
          />
        </div>

        <select
          value={statusFilter}
          onChange={(e) =>
            setStatusFilter(
              e.target.value
            )
          }
          className="
            px-5
            py-3
            rounded-2xl
            border
            border-[var(--border)]
          "
        >
          <option>All</option>
          <option>Pending</option>
          <option>In Progress</option>
          <option>Completed</option>
        </select>

        <button
          onClick={loadTasks}
          className="
            px-5
            py-3
            rounded-2xl
            bg-[var(--accent)]
            text-[var(--primary)]
            flex
            items-center
            gap-2
          "
        >
          <FaSyncAlt />

          Refresh
        </button>
      </div>

      {/* Content */}

      {loading ? (
        <div className="text-center py-20">
          Loading Tasks...
        </div>
      ) : filteredTasks.length === 0 ? (
        <div
          className="
            bg-white
            rounded-3xl
            shadow-lg
            py-20
            text-center
          "
        >
          <h2 className="text-3xl font-bold">
            No Tasks Yet
          </h2>

          <p className="text-gray-500 mt-3">
            Click "Add Task" to create
            your first task.
          </p>
        </div>
      ) : (
        <motion.div
          layout
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            xl:grid-cols-3
            gap-6
          "
        >
          {filteredTasks.map(
            (task) => (
              <TaskCard
                key={task.id}
                task={task}
                onEdit={(task) => {
                  setSelectedTask(task);
                  setOpenModal(true);
                }}
                onDelete={
                  handleDeleteTask
                }
              />
            )
          )}
        </motion.div>
      )}

      <TaskModal
        isOpen={openModal}
        onClose={() => {
          setOpenModal(false);
          setSelectedTask(null);
        }}
        onSubmit={
          selectedTask
            ? handleEditTask
            : handleCreateTask
        }
        initialData={selectedTask}
      />
    </div>
  );
}

export default Tasks;
