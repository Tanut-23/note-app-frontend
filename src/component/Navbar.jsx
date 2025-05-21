import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="bg-blue-500 px-6 py-4 items-center justify-between">
            <div className="flex items center space-x-4">
                <Link className="text-white text-3xl font-extrabold">Notes App</Link>
            </div>

            <div className="flex items-center space-x-4">
          <>
            <h3>email</h3>
            <Link
              to="/dashboard"
              className="text-gray-700 hover:text-blue-600 transition"
            >
              Dashboard
            </Link>
            <Link
              className="text-gray-700 hover:text-blue-600 transition"
            >
              Profile
            </Link>
            <button
              className="text-red-500 hover:text-red-700 transition"
            >
              Logout
            </button>
          </>
          <>
            <Link
              className="text-gray-700 hover:text-blue-600 transition"
            >
              Login
            </Link>
            <Link
              className="text-gray-700 hover:text-blue-600 transition"
            >
              Signup
            </Link>
          </>
      </div>
        </nav>
    );
};

export default Navbar;