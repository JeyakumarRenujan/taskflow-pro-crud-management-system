import {
  FaBars,
  FaBell,
  FaSearch,
} from "react-icons/fa";

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
        z-30
        h-20
        bg-white
        border-b
        border-[var(--border)]
        px-6
        flex
        items-center
        justify-between
        shadow-sm
      "
    >
      {/* Left Section */}

      <div className="flex items-center gap-4">
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
              text-2xl
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
            "
          >
            Welcome back 👋
          </p>
        </div>
      </div>

      {/* Center Search */}

      <div
        className="
          hidden
          md:flex
          items-center
          w-full
          max-w-md
          mx-8
        "
      >
        <div className="relative w-full">
          <FaSearch
            className="
              absolute
              left-4
              top-1/2
              -translate-y-1/2
              text-gray-400
            "
          />

          <input
            type="text"
            placeholder="Search..."
            className="
              w-full
              pl-11
              pr-4
              py-3
              rounded-2xl
              border
              border-[var(--border)]
              bg-[var(--background)]
              focus:border-[var(--primary)]
              focus:ring-4
              focus:ring-[var(--accent)]
              outline-none
              transition-all
            "
          />
        </div>
      </div>

      {/* Right Section */}

      <div className="flex items-center gap-5">
        <button
          className="
            relative
            p-3
            rounded-2xl
            bg-[var(--accent)]
            hover:bg-[#D8F3EA]
            transition-all
          "
        >
          <FaBell
            className="
              text-[var(--primary)]
              text-lg
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
        </button>

        <div className="flex items-center gap-3">
          <div
            className="
              w-11
              h-11
              rounded-full
              bg-[var(--primary)]
              text-white
              font-bold
              flex
              items-center
              justify-center
            "
          >
            {initials}
          </div>

          <div className="hidden md:block">
            <p
              className="
                font-semibold
                text-[var(--text-primary)]
              "
            >
              {user?.name}
            </p>

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
    </header>
  );
}

export default Navbar;
