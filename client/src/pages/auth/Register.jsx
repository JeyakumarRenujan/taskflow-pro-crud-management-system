import { useState } from "react";
import {
  Link,
  useNavigate,
} from "react-router-dom";
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

  const [loading, setLoading] =
    useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      await api.post(
        "/auth/register",
        form
      );

      alert(
        "Registration successful!"
      );

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
            Join
            <br />
            TaskFlow
          </h1>

          <p className="mt-8 text-2xl leading-relaxed">
            Create your account and
            start organizing your
            projects with confidence.
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
              Create Account
            </h2>

            <p
              className="
                mt-3
                text-lg
                text-[var(--text-secondary)]
              "
            >
              Create your workspace and
              start managing your tasks
              more efficiently.
            </p>
          </div>

          <form
            onSubmit={handleRegister}
            className="space-y-6 mt-10"
          >
            <Input
              label="Full Name"
              name="name"
              placeholder="Enter your full name"
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
              placeholder="Create a password"
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

          <p
            className="
              text-center
              mt-10
              text-gray-500
            "
          >
            Already have an
            account?{" "}

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
