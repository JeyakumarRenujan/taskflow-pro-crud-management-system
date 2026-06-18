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
    <div className="space-y-7">
      {/* Hero */}

      <motion.section
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
          via-[#5FC2A6]
          to-[#65CCB8]
          px-8
          py-8
          lg:px-10
          lg:py-9
          text-white
          shadow-lg
        "
      >
        <h1 className="text-3xl lg:text-4xl font-bold">
          Welcome Back 👋
        </h1>

        <p
          className="
            mt-3
            text-base
            opacity-90
            max-w-2xl
            leading-7
          "
        >
          Stay productive, organize your
          projects, manage deadlines and
          collaborate efficiently with
          TaskFlow Pro.
        </p>
      </motion.section>

      {/* Stats */}

      <section
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          xl:grid-cols-4
          gap-5
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
      </section>

      {/* Recent Tasks */}

      <section
        className="
          bg-white
          rounded-3xl
          shadow-lg
          border
          border-[var(--border)]
          p-6
        "
      >
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-2xl font-bold">
              Recent Tasks
            </h2>

            <p className="text-sm text-gray-500 mt-1">
              Your latest activities
            </p>
          </div>

          <button
            className="
              flex
              items-center
              gap-2
              text-[var(--primary)]
              font-semibold
              text-sm
            "
          >
            View All

            <FaArrowRight />
          </button>
        </div>

        <div className="space-y-3">
          {recentTasks.length === 0 ? (
            <div
              className="
                py-12
                rounded-2xl
                bg-[var(--background)]
                text-center
                text-gray-500
              "
            >
              No recent tasks available.
            </div>
          ) : (
            recentTasks.map((task) => (
              <motion.div
                key={task.id}
                whileHover={{
                  scale: 1.01,
                }}
                className="
                  flex
                  flex-col
                  md:flex-row
                  md:justify-between
                  md:items-center
                  gap-3
                  rounded-xl
                  border
                  border-[var(--border)]
                  p-4
                  hover:bg-[var(--accent)]
                  transition-all
                "
              >
                <div>
                  <h3 className="font-semibold">
                    {task.title}
                  </h3>

                  <p className="text-sm text-gray-500 mt-1">
                    {task.description}
                  </p>
                </div>

                <span
                  className="
                    px-3
                    py-2
                    rounded-full
                    bg-[var(--accent)]
                    text-[var(--primary)]
                    text-xs
                    font-semibold
                    w-fit
                  "
                >
                  {task.status}
                </span>
              </motion.div>
            ))
          )}
        </div>
      </section>
    </div>
  );
}

export default Dashboard;