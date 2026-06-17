import Sidebar from "../../components/layout/Sidebar";
import Navbar from "../../components/layout/Navbar";

import StatsCard from "../../components/task/StatsCard";
import TaskCard from "../../components/task/TaskCard";

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

    <div className="flex">

      <Sidebar />

      <div className="flex-1 bg-slate-100 min-h-screen">

        <Navbar />

        <div className="p-8">

          <h1 className="text-4xl font-bold mb-8">

            Welcome Back 👋

          </h1>

          <div className="grid md:grid-cols-3 gap-6">

            <StatsCard
              title="Total Tasks"
              value="12"
              color="blue"
            />

            <StatsCard
              title="Completed"
              value="7"
              color="green"
            />

            <StatsCard
              title="Pending"
              value="5"
              color="red"
            />

          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">

            Recent Tasks

          </h2>

          <div className="grid gap-5">

            {tasks.map((task, index) => (

              <TaskCard
                key={index}
                task={task}
              />

            ))}

          </div>

        </div>

      </div>

    </div>

  );

}

export default Dashboard;