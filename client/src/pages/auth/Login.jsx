import { Link } from "react-router-dom";
import AuthLayout from "../../components/layout/AuthLayout";

function Login() {
  return (
    <AuthLayout>

      <h1 className="text-3xl font-bold text-center mb-8">
        Welcome Back
      </h1>

      <form className="space-y-5">

        <input
          type="email"
          placeholder="Email"
          className="w-full border rounded-lg p-3"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border rounded-lg p-3"
        />

        <button
          className="w-full bg-blue-600 text-white p-3 rounded-lg"
        >
          Login
        </button>

      </form>

      <p className="text-center mt-6">

        Don't have an account?

        <Link
          to="/register"
          className="text-blue-600 ml-2"
        >
          Register
        </Link>

      </p>

    </AuthLayout>
  );
}

export default Login;