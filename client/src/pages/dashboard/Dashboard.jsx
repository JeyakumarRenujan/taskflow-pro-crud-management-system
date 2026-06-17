import Sidebar from "../../components/layout/Sidebar";
import Navbar from "../../components/layout/Navbar";

function Dashboard() {
  return (
    <div className="flex">

      <Sidebar />

      <div className="flex-1 bg-slate-100 min-h-screen">

        <Navbar />

        <div className="p-8">

          <h1 className="text-4xl font-bold">

            Dashboard

          </h1>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;