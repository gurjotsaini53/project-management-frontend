import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  let payload = { username: username, password: password };

  const Navigate = useNavigate();

  function NavigateToDashboard() {
    Navigate("/dashboard");
  }
  const handleSubmit = async (event) => {
    localStorage.removeItem("uname");
    localStorage.setItem("uname", "Gurjot Singh");
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/signin", {
        username,
        password,
      });
      console.log(response.data);

      if (response.status == 200) NavigateToDashboard();
      // Handle success here (e.g., redirecting the user)
    } catch (error) {
      console.error("Error:", error);
      // Handle error here
    }
  };
  return (
    <>
      <div className="signInFormCantainer">
        <h3>Welcome back</h3>
        <form onSubmit={handleSubmit} className="signInForm">
          <label>Username:</label>
          <input
            type="text"
            value={username}
            placeholder="enter your username"
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <label>Password:</label>
          <input
            type="password"
            value={password}
            placeholder="enter your password"
            onChange={(e) => setPassword(e.target.value)}
            required
            id="password"
          />

          <p>
            By clicking below, you agree to the Our Cloud Terms of Service and
            Privacy Policy.
          </p>
          <div className="btn-container">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>

          <div className="newAccountContainer">
            <a href="">Create new account</a>

            <a href="">forgot password ? </a>
          </div>
        </form>
      </div>
    </>
  );
}
