import { useEffect, useState } from "react";
import {
  FaTasks,
  FaClock,
  FaSpinner,
  FaCheckCircle,
  FaArrowRight,
} from "react-icons/fa";
import { motion } from "framer-motion";

import { getTasks } from "../../services/taskService";
import StatCard from "../../components/cards/StatCard";

function Dashboard() {
  const [tasks, setTasks] = useState([]);

  const loadTasks = async () => {
    try {
      const data = await getTasks();

      setTasks(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadTasks();
  }, []);

  const total = tasks.length;

  const pending = tasks.filter(
    (task) => task.status === "Pending"
  ).length;

  const progress = tasks.filter(
    (task) => task.status === "In Progress"
  ).length;

  const completed = tasks.filter(
    (task) => task.status === "Completed"
  ).length;

  const recentTasks = tasks.slice(0, 5);

  return (
    <div className="space-y-8">
      {/* Hero */}

      <motion.div
        initial={{
          opacity: 0,
          y: 15,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        className="
          rounded-3xl
          bg-gradient-to-r
          from-[#57BA98]
          to-[#65CCB8]
          p-8
          text-white
          shadow-xl
        "
      >
        <h1 className="text-4xl font-bold">
          Welcome Back 👋
        </h1>

        <p className="mt-3 text-lg opacity-90">
          Stay productive and keep your work
          organized with TaskFlow Pro.
        </p>
      </motion.div>

      {/* Statistics */}

      <div
        className="
          grid
          grid-cols-1
          md:grid-cols-2
          xl:grid-cols-4
          gap-6
        "
      >
        <StatCard
          title="Total Tasks"
          value={total}
          icon={<FaTasks />}
          color="#57BA98"
        />

        <StatCard
          title="Pending"
          value={pending}
          icon={<FaClock />}
          color="#F59E0B"
        />

        <StatCard
          title="In Progress"
          value={progress}
          icon={<FaSpinner />}
          color="#3B82F6"
        />

        <StatCard
          title="Completed"
          value={completed}
          icon={<FaCheckCircle />}
          color="#22C55E"
        />
      </div>

      {/* Recent Tasks */}

      <div
        className="
          bg-white
          rounded-3xl
          shadow-lg
          p-7
        "
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">
            Recent Tasks
          </h2>

          <button
            className="
              flex
              items-center
              gap-2
              text-[var(--primary)]
              font-semibold
            "
          >
            View All

            <FaArrowRight />
          </button>
        </div>

        <div className="space-y-4">
          {recentTasks.length === 0 ? (
            <div
              className="
                py-12
                text-center
                text-gray-500
              "
            >
              No tasks available.
            </div>
          ) : (
            recentTasks.map((task) => (
              <motion.div
                whileHover={{
                  scale: 1.01,
                }}
                key={task.id}
                className="
                  flex
                  justify-between
                  items-center
                  rounded-2xl
                  border
                  border-[var(--border)]
                  p-5
                  hover:bg-[var(--accent)]
                  transition-all
                "
              >
                <div>
                  <h3 className="font-semibold text-lg">
                    {task.title}
                  </h3>

                  <p className="text-sm text-gray-500 mt-1">
                    {task.description}
                  </p>
                </div>

                <span
                  className="
                    px-4
                    py-2
                    rounded-full
                    text-sm
                    font-medium
                    bg-[var(--accent)]
                    text-[var(--primary)]
                  "
                >
                  {task.status}
                </span>
              </motion.div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
