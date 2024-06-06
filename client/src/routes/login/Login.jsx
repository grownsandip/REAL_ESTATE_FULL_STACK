import { Link, useNavigate } from "react-router-dom";
import "./login.scss";
import { useState } from "react";
import apiRequest from "../../lib/apiRequest.js";
function Login() {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    setError("");
    setIsLoading(true);
    e.preventDefault();
    const formData = new FormData(e.target);
    const username = formData.get("username");
    const password = formData.get("password");
    //console.log(username,email,password)
    try {
      const res = await apiRequest.post("/auth/login", { username, password });
      localStorage.setItem("user",JSON.stringify(res.data));
      navigate("/");
    } catch (err) {
      setError(err.response.data.message);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="login">
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <h1>Welcome back</h1>
          <input
            name="username"
            required
            minLength={3}
            maxLength={20}
            type="text"
            placeholder="Username"
          />
          <input
            name="password"
            type="password"
            required
            placeholder="Password"
          />
          <button disabled={isLoading}>Login</button>
          {error && <span>{error}</span>}
          <Link to="/register">you have an account?</Link>
        </form>
      </div>
      <div className="imgContainer">
        <img src="./images/bg.png" alt="" />
      </div>
    </div>
  );
}

export default Login;
