import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const [username, setNewUsername] = useState("");
  const [password, setNewPassword] = useState("");
  const [name, setName] = useState("");
  const [email, setNewEmail] = useState("");
  const Navigate = useNavigate();
  function signin() {
    Navigate("/");
  }
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/signup", {
        name,
        email,
        username,
        password,
      });
      if (response.status == 201) {
        window.alert("Registration Successfull");
        signin();
      } else {
        window.alert(
          "Registration Failed , Please enter valid username, email and password"
        );
      }
      console.log(response.data);
      // Handle success here (e.g., redirecting the user)
    } catch (error) {
      console.error("Error:", error);
      // Handle error here
    }
  };
  return (
    <>
      <div className="signUpFormCantainer">
        <h3>Register Yourself</h3>
        <form onSubmit={handleSubmit} className="signInForm">
          <label>Name : </label>
          <input
            type="text"
            value={name}
            placeholder="John Doe"
            onChange={(e) => setName(e.target.value)}
            required
            id="password"
          />
          <label>Enter Your Username:</label>
          <input
            type="text"
            value={username}
            placeholder="enter unique username"
            onChange={(e) => setNewUsername(e.target.value)}
            required
          />
          <label>Enter Your Email:</label>
          <input
            type="text"
            value={email}
            placeholder="example@email.com"
            onChange={(e) => setNewEmail(e.target.value)}
            required
          />
          <label>Enter Password:</label>
          <input
            type="password"
            value={password}
            placeholder="12345678"
            onChange={(e) => setNewPassword(e.target.value)}
            required
            id="password1"
          />

          <p>
            By clicking below, you agree to the Our Cloud Terms of Service and
            Privacy Policy.
          </p>
          <div className="btn-container">
            <button type="submit" className="btn btn-primary">
              Register
            </button>
          </div>

          <div className="newAccountContainer">
            <a href="" onClick={signin}>
              Sign In
            </a>
          </div>
        </form>
      </div>
    </>
  );
}
