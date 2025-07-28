import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const registeruser = async () => {
    try {
      await axios.post(
        "https://login-backend-x6tf.onrender.com/auth/register",
        {
          username,
          email,
          password,
        }
      );
      alert("Registration successful!");
      navigate("/login");
    } catch (err) {
      alert("Something went wrong");
    }
  };

  return (
    <div className="register-container">
      <h3>Register</h3>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={registeruser}>Register</button>
    </div>
  );
}

export default Register;
