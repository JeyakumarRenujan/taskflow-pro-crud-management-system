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
    <div className="space-y-10">
      {/* Header */}

      <div
        className="
          flex
          flex-col
          lg:flex-row
          justify-between
          lg:items-center
          gap-6
        "
      >
        <div>
          <h1 className="text-4xl lg:text-5xl font-bold">
            My Tasks
          </h1>

          <p
            className="
              mt-2
              text-lg
              text-[var(--text-secondary)]
            "
          >
            Manage your daily work
            efficiently.
          </p>
        </div>

        <button
          onClick={() => {
            setSelectedTask(null);
            setOpenModal(true);
          }}
          className="
            px-7
            py-4
            rounded-2xl
            bg-[var(--primary)]
            hover:bg-[var(--primary-hover)]
            text-white
            font-semibold
            shadow-lg
            flex
            items-center
            gap-3
            transition-all
          "
        >
          <FaPlus />

          Add New Task
        </button>
      </div>

      {/* Search Panel */}

      <section
        className="
          bg-white
          rounded-[28px]
          border
          border-[var(--border)]
          shadow-md
          p-6
          flex
          flex-col
          lg:flex-row
          gap-5
        "
      >
        <div className="relative flex-1">
          <FaSearch
            className="
              absolute
              left-5
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
              h-12
              pl-12
              rounded-2xl
              border
              border-[var(--border)]
              bg-[var(--background)]
              focus:ring-4
              focus:ring-[var(--accent)]
              outline-none
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
            h-12
            px-5
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
            h-12
            px-6
            rounded-2xl
            bg-[var(--accent)]
            text-[var(--primary)]
            font-semibold
            flex
            items-center
            gap-2
          "
        >
          <FaSyncAlt />

          Refresh
        </button>
      </section>

      {/* Tasks */}

      {loading ? (
        <div className="py-24 text-center">
          Loading...
        </div>
      ) : filteredTasks.length === 0 ? (
        <div
          className="
            bg-white
            rounded-[28px]
            border
            border-[var(--border)]
            py-24
            text-center
            shadow-md
          "
        >
          <h2 className="text-3xl font-bold">
            No Tasks Found
          </h2>

          <p className="mt-3 text-gray-500">
            Create your first task to
            get started.
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
            gap-7
          "
        >
          {filteredTasks.map((task) => (
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
          ))}
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