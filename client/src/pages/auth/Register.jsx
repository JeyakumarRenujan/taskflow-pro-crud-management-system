import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import Logo from "../../components/common/Logo";
import Button from "../../components/ui/Button";
import Input from "../../components/ui/Input";

import api from "../../services/api";

function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      await api.post("/auth/register", form);

      alert("Registration successful!");

      navigate("/login");
    } catch (error) {
      alert(
        error.response?.data?.message ||
          "Registration failed"
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
            Join
            <br />
            TaskFlow
          </h1>

          <p className="mt-6 text-xl leading-relaxed">
            Create your account and start
            organizing your projects and
            daily work with ease.
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
            Create Account
          </h2>

          <p className="text-gray-500 mt-2 mb-8">
            Create your account to start
            managing tasks efficiently.
          </p>

          <form
            onSubmit={handleRegister}
            className="space-y-5"
          >
            <Input
              label="Full Name"
              name="name"
              placeholder="Enter your name"
              value={form.name}
              onChange={handleChange}
            />

            <Input
              label="Email"
              name="email"
              type="email"
              placeholder="Enter your email"
              value={form.email}
              onChange={handleChange}
            />

            <Input
              label="Password"
              name="password"
              type="password"
              placeholder="Enter your password"
              value={form.password}
              onChange={handleChange}
            />

            <Button
              type="submit"
              loading={loading}
            >
              Create Account
            </Button>
          </form>

          <p className="text-center mt-8 text-gray-600">
            Already have an account?{" "}
            <Link
              to="/login"
              className="
                text-[#57BA98]
                font-semibold
                hover:underline
              "
            >
              Login
            </Link>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Register;
