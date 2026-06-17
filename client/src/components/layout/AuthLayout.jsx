function AuthLayout({ children }) {
  return (
    <div
      className="
      min-h-screen
      bg-[#0B1120]
      text-white
      flex
      items-center
      justify-center
      px-6
      py-10
      overflow-hidden
      "
    >
      <div
        className="
        w-full
        max-w-7xl
        grid
        lg:grid-cols-2
        gap-20
        items-center
        "
      >
        {/* Left Side */}

        <div className="hidden lg:block">

          <h2 className="text-6xl font-bold leading-tight">

            Organize your work.

            <br />

            <span className="text-indigo-500">

              Achieve more.

            </span>

          </h2>

          <p className="mt-8 text-xl text-slate-400 leading-9">

            TaskFlow Pro helps you manage tasks,
            stay productive and organize your
            daily workflow efficiently.

          </p>

          <div className="space-y-8 mt-14">

            <div className="flex gap-5">

              <div
                className="
                w-14
                h-14
                rounded-xl
                bg-indigo-600/20
                flex
                items-center
                justify-center
                text-indigo-400
                text-2xl
                "
              >
                📋
              </div>

              <div>

                <h3 className="font-semibold text-xl">

                  Stay Organized

                </h3>

                <p className="text-slate-400">

                  Manage all your tasks in one place.

                </p>

              </div>

            </div>

            <div className="flex gap-5">

              <div
                className="
                w-14
                h-14
                rounded-xl
                bg-indigo-600/20
                flex
                items-center
                justify-center
                text-indigo-400
                text-2xl
                "
              >
                📈
              </div>

              <div>

                <h3 className="font-semibold text-xl">

                  Track Progress

                </h3>

                <p className="text-slate-400">

                  Visualize your productivity.

                </p>

              </div>

            </div>

            <div className="flex gap-5">

              <div
                className="
                w-14
                h-14
                rounded-xl
                bg-indigo-600/20
                flex
                items-center
                justify-center
                text-indigo-400
                text-2xl
                "
              >
                🚀
              </div>

              <div>

                <h3 className="font-semibold text-xl">

                  Work Smarter

                </h3>

                <p className="text-slate-400">

                  Focus on what matters most.

                </p>

              </div>

            </div>

          </div>

        </div>

        {/* Right Side */}

        <div
          className="
          w-full
          max-w-lg
          mx-auto
          bg-white/5
          backdrop-blur-xl
          border
          border-white/10
          rounded-3xl
          shadow-2xl
          p-10
          "
        >

          {children}

        </div>

      </div>

    </div>
  );
}

export default AuthLayout;