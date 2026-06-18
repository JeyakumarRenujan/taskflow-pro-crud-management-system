import Sidebar from "../components/layout/Sidebar";
import Navbar from "../components/layout/Navbar";

function MainLayout({ children }) {

  return (

    <div className="flex">

      <Sidebar />

      <main

        className="
        flex-1
        ml-64
        min-h-screen
        bg-gray-50
        "

      >

        <Navbar />

        <div className="p-8">

          {children}

        </div>

      </main>

    </div>

  );

}

export default MainLayout;