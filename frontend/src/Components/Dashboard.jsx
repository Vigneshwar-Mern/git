import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    const storedUsername = localStorage.getItem("username");
    console.log(token);

    if (!token) {
      alert("Please login first");
      navigate("/login");
    } else {
      setUsername(storedUsername || "User");
    }
  }, [navigate]);

  const Logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    navigate("/login");
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-card">
        <h2>Welcome, {username}!</h2>
        <button onClick={Logout}>Logout</button>
      </div>
    </div>
  );
}

export default Dashboard;
