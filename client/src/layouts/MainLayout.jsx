import { useState } from "react";
import {
  motion,
  AnimatePresence,
} from "framer-motion";
import { Outlet } from "react-router-dom";

import Sidebar from "../components/layout/Sidebar";
import Navbar from "../components/layout/Navbar";

function MainLayout() {
  const [sidebarOpen, setSidebarOpen] =
    useState(false);

  return (
    <div className="min-h-screen bg-[#F5F7F9]">

      {/* Desktop */}

      <div className="hidden lg:flex">

        {/* Sidebar */}

        <div className="w-[280px] shrink-0 p-4">

          <div
            className="
              fixed
              top-4
              left-4
              bottom-4
              w-[260px]
              z-40
            "
          >
            <Sidebar />
          </div>

        </div>

        {/* Main */}

        <div className="flex-1 flex flex-col">

          <Navbar
            toggleSidebar={() =>
              setSidebarOpen(!sidebarOpen)
            }
          />

          <main
            className="
              px-8
              pb-8
              pt-2
              flex-1
            "
          >
            <Outlet />
          </main>

        </div>

      </div>

      {/* Mobile */}

      <AnimatePresence>

        {sidebarOpen && (

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="
              fixed
              inset-0
              bg-black/40
              z-50
              lg:hidden
            "
            onClick={() =>
              setSidebarOpen(false)
            }
          >

            <motion.div
              initial={{ x: -280 }}
              animate={{ x: 0 }}
              exit={{ x: -280 }}
              transition={{
                duration: 0.3,
              }}
              className="w-[260px] h-full"
              onClick={(e) =>
                e.stopPropagation()
              }
            >
              <Sidebar />
            </motion.div>

          </motion.div>

        )}

      </AnimatePresence>

      {/* Mobile Content */}

      <div className="lg:hidden flex flex-col min-h-screen">

        <Navbar
          toggleSidebar={() =>
            setSidebarOpen(!sidebarOpen)
          }
        />

        <main className="p-4 flex-1">

          <Outlet />

        </main>

      </div>

    </div>
  );
}

export default MainLayout;