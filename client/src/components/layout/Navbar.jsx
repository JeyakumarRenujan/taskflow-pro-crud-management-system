import {
  FaBars,
  FaBell,
  FaSearch,
} from "react-icons/fa";

import { motion } from "framer-motion";

import { useAuth } from "../../context/AuthContext";

function Navbar({ toggleSidebar }) {
  const { user } = useAuth();

  const initials =
    user?.name
      ?.split(" ")
      .map((word) => word[0])
      .join("")
      .toUpperCase() || "U";

  return (
    <header
      className="
        sticky
        top-0
        z-40
        bg-white/90
        backdrop-blur-md
        border-b
        border-[var(--border)]
      "
    >
      <div
        className="
          h-16
          flex
          items-center
          justify-between
          px-5
          lg:px-8
          gap-4
        "
      >
        {/* Left */}

        <div className="flex items-center gap-4 shrink-0">
          <button
            onClick={toggleSidebar}
            className="
              lg:hidden
              text-xl
              text-[var(--text-primary)]
            "
          >
            <FaBars />
          </button>

          <div>
            <h1
              className="
                text-2xl
                font-bold
                text-[var(--text-primary)]
              "
            >
              Dashboard
            </h1>

            <p
              className="
                text-xs
                text-[var(--text-secondary)]
              "
            >
              Welcome back 👋
            </p>
          </div>
        </div>

        {/* Search */}

        <div
          className="
            hidden
            md:flex
            flex-1
            justify-center
            px-4
          "
        >
          <div
            className="
              relative
              w-full
              max-w-lg
            "
          >
            <FaSearch
              className="
                absolute
                left-4
                top-1/2
                -translate-y-1/2
                text-gray-400
                text-sm
              "
            />

            <input
              type="text"
              placeholder="Search tasks..."
              className="
                w-full
                h-10
                pl-11
                pr-4
                rounded-xl
                bg-[var(--background)]
                border
                border-[var(--border)]
                focus:border-[var(--primary)]
                focus:ring-2
                focus:ring-[var(--accent)]
                outline-none
                transition-all
              "
            />
          </div>
        </div>

        {/* Right */}

        <div className="flex items-center gap-3 shrink-0">
          <motion.button
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="
              relative
              w-10
              h-10
              rounded-xl
              bg-[var(--accent)]
              flex
              justify-center
              items-center
              hover:shadow-md
              transition-all
            "
          >
            <FaBell
              className="
                text-base
                text-[var(--primary)]
              "
            />

            <span
              className="
                absolute
                top-2
                right-2
                w-2
                h-2
                rounded-full
                bg-red-500
              "
            />
          </motion.button>

          <div
            className="
              flex
              items-center
              gap-3
              bg-[var(--background)]
              rounded-xl
              px-3
              py-2
            "
          >
            <div
              className="
                w-10
                h-10
                rounded-full
                bg-[var(--primary)]
                text-white
                flex
                justify-center
                items-center
                font-bold
              "
            >
              {initials}
            </div>

            <div className="hidden lg:block">
              <h3
                className="
                  font-semibold
                  text-sm
                  text-[var(--text-primary)]
                "
              >
                {user?.name}
              </h3>

              <p
                className="
                  text-[11px]
                  text-[var(--text-secondary)]
                "
              >
                {user?.email}
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;