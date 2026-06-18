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
        flex
      "
    >
      {/* Desktop Sidebar */}

      <div
        className="
          hidden
          lg:block
          w-72
          shrink-0
        "
      >
        <div
          className="
            fixed
            left-0
            top-0
            w-72
            h-screen
          "
        >
          <Sidebar />
        </div>
      </div>

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
              z-50
              lg:hidden
            "
            onClick={() =>
              setSidebarOpen(false)
            }
          >
            <motion.div
              initial={{
                x: -300,
              }}
              animate={{
                x: 0,
              }}
              exit={{
                x: -300,
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

      {/* Main Content */}

      <div
        className="
          flex-1
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
            p-8
          "
        >
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default MainLayout;