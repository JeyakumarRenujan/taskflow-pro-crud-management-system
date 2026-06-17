import Sidebar from "../../components/layout/Sidebar";
import Navbar from "../../components/layout/Navbar";

import StatsCard from "../../components/task/StatsCard";
import TaskCard from "../../components/task/TaskCard";

import { FaPlus } from "react-icons/fa";

function Dashboard() {

  const tasks = [

    {
      title: "Complete Internship CRUD",
      description: "Finish backend APIs",
      priority: "High",
    },

    {
      title: "Build React Dashboard",
      description: "Create beautiful UI",
      priority: "Medium",
    },

    {
      title: "Deploy Project",
      description: "Upload to Render",
      priority: "Low",
    },

  ];

  return (

    <div className="flex bg-slate-950 text-white min-h-screen">

      <Sidebar />

      <div className="flex-1">

        <Navbar />

        <div className="p-10">

          <div className="flex justify-between items-center mb-10">

            <div>

              <h1 className="text-5xl font-bold">

                👋 Welcome Back

              </h1>

              <p className="text-slate-400 mt-3 text-lg">

                Stay productive and manage your tasks efficiently.

              </p>

            </div>

            <button
              className="
              flex
              items-center
              gap-3
              bg-indigo-600
              hover:bg-indigo-500
              px-6
              py-4
              rounded-xl
              font-semibold
              shadow-lg
              duration-300
              "
            >

              <FaPlus />

              Add Task

            </button>

          </div>

          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6">

            <StatsCard
              title="Total Tasks"
              value="18"
              color="blue"
            />

            <StatsCard
              title="Completed"
              value="12"
              color="green"
            />

            <StatsCard
              title="Pending"
              value="6"
              color="red"
            />

            <StatsCard
              title="Progress"
              value="67%"
              color="purple"
            />

          </div>

          <h2 className="text-3xl font-bold mt-14 mb-8">

            Recent Tasks

          </h2>

          <div className="grid gap-5">

            {

              tasks.map((task, index) => (

                <TaskCard

                  key={index}

                  task={task}

                />

              ))

            }

          </div>

        </div>

      </div>

    </div>

  );

}

export default Dashboard;