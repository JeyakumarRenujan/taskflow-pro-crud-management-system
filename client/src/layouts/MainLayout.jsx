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
    <div
      className="
        min-h-screen
        bg-[var(--background)]
      "
    >
      {/* Desktop Sidebar */}

      <aside
        className="
          hidden
          lg:block
          fixed
          top-0
          left-0
          w-72
          h-screen
          z-40
        "
      >
        <Sidebar />
      </aside>

      {/* Mobile Sidebar */}

      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            className="
              fixed
              inset-0
              bg-black/50
              backdrop-blur-sm
              z-50
              lg:hidden
            "
            onClick={() =>
              setSidebarOpen(false)
            }
          >
            <motion.div
              initial={{
                x: -320,
              }}
              animate={{
                x: 0,
              }}
              exit={{
                x: -320,
              }}
              transition={{
                duration: 0.3,
              }}
              className="
                w-72
                h-full
              "
              onClick={(e) =>
                e.stopPropagation()
              }
            >
              <Sidebar />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Area */}

      <div
        className="
          lg:ml-72
          min-h-screen
          flex
          flex-col
        "
      >
        <Navbar
          toggleSidebar={() =>
            setSidebarOpen(
              !sidebarOpen
            )
          }
        />

        <main
          className="
            flex-1
            p-6
            md:p-8
            xl:p-10
          "
        >
          <div
            className="
              w-full
              max-w-7xl
              mx-auto
            "
          >
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}

export default MainLayout;