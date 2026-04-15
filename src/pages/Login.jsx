import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email);
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
      <input
        className="border p-2 w-full"
        placeholder="Enter email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <button className="bg-blue-500 text-white px-4 py-2">
        Login
      </button>
    </form>
  );
}