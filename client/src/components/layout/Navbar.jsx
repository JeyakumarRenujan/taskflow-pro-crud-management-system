import {
  FaBell,
  FaSearch,
} from "react-icons/fa";

function Navbar() {
  return (
    <header
      className="
      sticky
      top-0
      z-50
      h-20
      bg-slate-950/80
      backdrop-blur-xl
      border-b
      border-slate-800
      flex
      items-center
      justify-between
      px-8
      "
    >
      {/* Left */}

      <div>

        <h2 className="text-3xl font-bold text-white">

          Dashboard

        </h2>

        <p className="text-slate-400 text-sm mt-1">

          Manage your tasks efficiently

        </p>

      </div>

      {/* Right */}

      <div className="flex items-center gap-5">

        {/* Search */}

        <div
          className="
          hidden
          md:flex
          items-center
          gap-3
          bg-slate-900
          border
          border-slate-700
          rounded-xl
          px-4
          py-3
          "
        >

          <FaSearch className="text-slate-500" />

          <input
            type="text"
            placeholder="Search tasks..."
            className="
            bg-transparent
            outline-none
            text-white
            placeholder:text-slate-500
            "
          />

        </div>

        {/* Notification */}

        <button
          className="
          w-12
          h-12
          rounded-xl
          bg-slate-900
          border
          border-slate-700
          hover:bg-indigo-600
          duration-300
          flex
          items-center
          justify-center
          "
        >

          <FaBell className="text-white" />

        </button>

        {/* Profile */}

        <div className="flex items-center gap-3">

          <div
            className="
            w-11
            h-11
            rounded-full
            bg-gradient-to-r
            from-indigo-500
            to-purple-500
            flex
            items-center
            justify-center
            font-bold
            "
          >

            R

          </div>

          <div className="hidden lg:block">

            <p className="text-white font-semibold">

              Renujan

            </p>

            <p className="text-slate-400 text-sm">

              Full Stack Developer

            </p>

          </div>

        </div>

      </div>

    </header>
  );
}

export default Navbar;