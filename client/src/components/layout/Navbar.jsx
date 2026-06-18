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
          h-20
          flex
          items-center
          justify-between
          px-6
          lg:px-10
        "
      >
        {/* Left */}

        <div className="flex items-center gap-5">
          <button
            onClick={toggleSidebar}
            className="
              lg:hidden
              text-2xl
              text-[var(--text-primary)]
            "
          >
            <FaBars />
          </button>

          <div>
            <h1
              className="
                text-3xl
                font-bold
                text-[var(--text-primary)]
              "
            >
              Dashboard
            </h1>

            <p
              className="
                text-sm
                text-[var(--text-secondary)]
                mt-1
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
            px-10
          "
        >
          <div
            className="
              relative
              w-full
              max-w-xl
            "
          >
            <FaSearch
              className="
                absolute
                left-5
                top-1/2
                -translate-y-1/2
                text-gray-400
              "
            />

            <input
              type="text"
              placeholder="Search tasks..."
              className="
                w-full
                h-12
                pl-12
                pr-5
                rounded-2xl
                bg-[var(--background)]
                border
                border-[var(--border)]
                focus:border-[var(--primary)]
                focus:ring-4
                focus:ring-[var(--accent)]
                outline-none
                transition-all
              "
            />
          </div>
        </div>

        {/* Right */}

        <div className="flex items-center gap-5">
          <motion.button
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="
              relative
              w-12
              h-12
              rounded-2xl
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
                text-lg
                text-[var(--primary)]
              "
            />

            <span
              className="
                absolute
                top-3
                right-3
                w-2.5
                h-2.5
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
              rounded-2xl
              px-3
              py-2
            "
          >
            <div
              className="
                w-12
                h-12
                rounded-full
                bg-[var(--primary)]
                text-white
                flex
                justify-center
                items-center
                font-bold
                text-lg
              "
            >
              {initials}
            </div>

            <div className="hidden lg:block">
              <h3
                className="
                  font-semibold
                  text-[15px]
                  text-[var(--text-primary)]
                "
              >
                {user?.name}
              </h3>

              <p
                className="
                  text-xs
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
