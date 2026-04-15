import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="p-4 bg-white shadow flex justify-between">
      <Link to="/">Home</Link>
      <div className="space-x-4">
        {user ? (
          <>
            <Link to="/create">Create</Link>
            <button onClick={logout}>Logout</button>
          </>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </nav>
  );
}