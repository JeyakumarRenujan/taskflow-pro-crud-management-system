import { Link } from "react-router-dom";
import AuthLayout from "../../components/layout/AuthLayout";

function Register() {
  return (
    <AuthLayout>

      <h1 className="text-3xl font-bold text-center mb-8">
        Create Account
      </h1>

      <form className="space-y-5">

        <input
          type="text"
          placeholder="Name"
          className="w-full border rounded-lg p-3"
        />

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
          className="w-full bg-green-600 text-white p-3 rounded-lg"
        >
          Register
        </button>

      </form>

      <p className="text-center mt-6">

        Already have an account?

        <Link
          to="/"
          className="text-blue-600 ml-2"
        >
          Login
        </Link>

      </p>

    </AuthLayout>
  );
}

export default Register;