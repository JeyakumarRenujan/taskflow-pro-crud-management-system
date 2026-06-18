import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";

import Button from "../../components/ui/Button";
import Input from "../../components/ui/Input";
import Logo from "../../components/common/Logo";

import api from "../../services/api";
import { useAuth } from "../../context/AuthContext";

function Login() {
  const navigate = useNavigate();

  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await api.post(
        "/auth/login",
        {
          email,
          password,
        }
      );

      login(
        response.data.user,
        response.data.token
      );

      navigate("/dashboard");
    } catch (error) {
      alert(
        error.response?.data?.message ||
          "Login Failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className="
        min-h-screen
        bg-[var(--background)]
        grid
        lg:grid-cols-2
      "
    >
      {/* Left Side */}

      <div
        className="
          hidden
          lg:flex
          flex-col
          justify-center
          items-center
          bg-gradient-to-br
          from-[#57BA98]
          to-[#65CCB8]
          p-12
          text-white
          relative
          overflow-hidden
        "
      >
        <div className="max-w-md z-10">
          <h1 className="text-6xl font-extrabold leading-tight">
            TaskFlow
            <br />
            Pro
          </h1>

          <p className="mt-6 text-xl leading-relaxed">
            Organize your projects,
            collaborate with your team,
            and stay productive every day.
          </p>
        </div>

        <div
          className="
            absolute
            w-72
            h-72
            rounded-full
            bg-white/10
            -top-16
            -right-16
          "
        />

        <div
          className="
            absolute
            w-56
            h-56
            rounded-full
            bg-white/10
            bottom-10
            left-10
          "
        />
      </div>

      {/* Right Side */}

      <div
        className="
          flex
          justify-center
          items-center
          p-6
        "
      >
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.5,
          }}
          className="
            w-full
            max-w-lg
            bg-white/90
            backdrop-blur-md
            rounded-3xl
            shadow-2xl
            p-10
          "
        >
          <Logo />

          <h2
            className="
              text-4xl
              font-bold
              mt-8
              text-[var(--text-primary)]
            "
          >
            Welcome Back 👋
          </h2>

          <p className="text-gray-500 mt-2 mb-8">
            Sign in to continue managing your tasks.
          </p>

          <form
            onSubmit={handleLogin}
            className="space-y-5"
          >
            <Input
              label="Email"
              name="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
            />

            <Input
              label="Password"
              name="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
            />

            <Button
              type="submit"
              loading={loading}
            >
              Login
            </Button>
          </form>

          <p className="text-center mt-8 text-gray-600">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="
                text-[#57BA98]
                font-semibold
                hover:underline
              "
            >
              Register
            </Link>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Login;
