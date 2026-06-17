import { Link } from "react-router-dom";
import { FaEnvelope, FaLock, FaCheckCircle } from "react-icons/fa";
import AuthLayout from "../../components/layout/AuthLayout";

function Login() {
  return (
    <AuthLayout>
      <div className="space-y-8">

        {/* Logo */}

        <div className="text-center">

          <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg">

            <FaCheckCircle className="text-white text-2xl" />

          </div>

          <h1 className="text-4xl font-bold text-white mt-6">

            Welcome Back

          </h1>

          <p className="text-slate-400 mt-2">

            Login to continue managing your tasks

          </p>

        </div>

        {/* Form */}

        <form className="space-y-5">

          <div>

            <label className="text-slate-300 text-sm mb-2 block">

              Email

            </label>

            <div className="flex items-center bg-slate-900 border border-slate-700 rounded-xl px-4">

              <FaEnvelope className="text-slate-500" />

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-transparent outline-none p-4 text-white"
              />

            </div>

          </div>

          <div>

            <label className="text-slate-300 text-sm mb-2 block">

              Password

            </label>

            <div className="flex items-center bg-slate-900 border border-slate-700 rounded-xl px-4">

              <FaLock className="text-slate-500" />

              <input
                type="password"
                placeholder="Enter your password"
                className="w-full bg-transparent outline-none p-4 text-white"
              />

            </div>

          </div>

          <button
            className="
            w-full
            py-4
            rounded-xl
            font-semibold
            text-white
            bg-gradient-to-r
            from-indigo-500
            to-purple-600
            hover:scale-[1.02]
            duration-300
            shadow-lg
            "
          >
            Login
          </button>

        </form>

        <p className="text-center text-slate-400">

          Don't have an account?

          <Link
            to="/register"
            className="text-indigo-400 ml-2 hover:text-indigo-300"
          >
            Register
          </Link>

        </p>

      </div>
    </AuthLayout>
  );
}

export default Login;