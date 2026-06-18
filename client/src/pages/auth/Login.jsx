import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

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

          password

        }

      );

      login(

        response.data.user,

        response.data.token

      );

      navigate("/dashboard");

    }

    catch (error) {

      alert(

        error.response?.data?.message ||

        "Login Failed"

      );

    }

    finally {

      setLoading(false);

    }

  };

  return (

    <div className="min-h-screen grid lg:grid-cols-2">

      {/* Left Side */}

      <div

        className="
        hidden
        lg:flex
        items-center
        justify-center
        bg-gradient-to-br
        from-indigo-500
        to-purple-500
        "

      >

        <div className="text-center text-white">

          <h1 className="text-5xl font-bold">

            TaskFlow Pro

          </h1>

          <p className="mt-4 text-lg">

            Organize your work beautifully.

          </p>

        </div>

      </div>

      {/* Right Side */}

      <div

        className="
        flex
        justify-center
        items-center
        px-6
        "

      >

        <form

          onSubmit={handleLogin}

          className="
          w-full
          max-w-md
          bg-white
          p-8
          rounded-2xl
          shadow-xl
          space-y-5
          "

        >

          <Logo />

          <h2

            className="
            text-3xl
            font-bold
            mt-4
            "

          >

            Welcome Back 👋

          </h2>

          <Input

            label="Email"

            type="email"

            value={email}

            placeholder="Enter your email"

            onChange={(e)=>setEmail(e.target.value)}

          />

          <Input

            label="Password"

            type="password"

            value={password}

            placeholder="Enter your password"

            onChange={(e)=>setPassword(e.target.value)}

          />

          <Button

            type="submit"

            disabled={loading}

          >

            {

              loading

              ?

              "Signing In..."

              :

              "Login"

            }

          </Button>

          <p className="text-center">

            Don't have an account?

            {" "}

            <Link

              to="/register"

              className="text-indigo-600"

            >

              Register

            </Link>

          </p>

        </form>

      </div>

    </div>

  );

}

export default Login;