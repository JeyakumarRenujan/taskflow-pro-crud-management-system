import { useState } from "react";
import {
  useNavigate,
  Link,
} from "react-router-dom";
import { motion } from "framer-motion";

import Button from "../../components/ui/Button";
import Input from "../../components/ui/Input";
import Logo from "../../components/common/Logo";

import api from "../../services/api";
import { useAuth } from "../../context/AuthContext";

function Login() {
  const navigate = useNavigate();

  const { login } = useAuth();

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response =
        await api.post(
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
      {/* Left */}

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
          p-16
          relative
          overflow-hidden
          text-white
        "
      >
        <div className="max-w-lg z-10">
          <h1 className="text-7xl font-extrabold leading-tight">
            TaskFlow Pro
          </h1>

          <p className="mt-8 text-2xl leading-relaxed">
            Organize your projects,
            collaborate with your team,
            and stay productive every day.
          </p>
        </div>

        <div
          className="
            absolute
            w-80
            h-80
            rounded-full
            bg-white/10
            -top-10
            -right-10
          "
        />

        <div
          className="
            absolute
            w-60
            h-60
            rounded-full
            bg-white/10
            bottom-10
            left-10
          "
        />
      </div>

      {/* Right */}

      <div
        className="
          flex
          justify-center
          items-center
          px-8
        "
      >
        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.4,
          }}
          className="
            w-full
            max-w-xl
            bg-white
            rounded-[32px]
            shadow-2xl
            p-12
          "
        >
          <Logo />

          <div className="mt-10">
            <h2
              className="
                text-5xl
                font-bold
                text-[var(--text-primary)]
              "
            >
              Welcome Back 
            </h2>

            <p
              className="
                mt-3
                text-lg
                text-[var(--text-secondary)]
              "
            >
              Sign in to access your
              workspace and continue
              managing your tasks.
            </p>
          </div>

          <form
            onSubmit={handleLogin}
            className="space-y-6 mt-10"
          >
            <Input
              label="Email"
              name="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) =>
                setEmail(
                  e.target.value
                )
              }
            />

            <Input
              label="Password"
              name="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) =>
                setPassword(
                  e.target.value
                )
              }
            />

            <Button
              type="submit"
              loading={loading}
            >
              Login
            </Button>
          </form>

          <p
            className="
              text-center
              mt-10
              text-gray-500
            "
          >
            Don't have an account?{" "}

            <Link
              to="/register"
              className="
                font-semibold
                text-[#57BA98]
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
