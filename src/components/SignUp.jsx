import { useState } from "react";

export default function SignUp() {
  const [newUsername, setNewUsername] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newConfirmPassword, setConfirmPassword] = useState("");
  const [newEmail, setNewEmail] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("", {
        username,
        password,
      });
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
          <label>Enter Your Username:</label>
          <input
            type="text"
            value={newUsername}
            placeholder="enter unique username"
            onChange={(e) => setNewUsername(e.target.value)}
            required
          />
          <label>Enter Your Email:</label>
          <input
            type="text"
            value={newEmail}
            placeholder="example@email.com"
            onChange={(e) => setNewEmail(e.target.value)}
            required
          />
          <label>Enter Password:</label>
          <input
            type="password"
            value={newPassword}
            placeholder="12345678"
            onChange={(e) => setNewPassword(e.target.value)}
            required
            id="password1"
          />
          <label>Confirm Password:</label>
          <input
            type="password"
            value={newConfirmPassword}
            placeholder="12345678"
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            id="password"
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
            <a href="">Sign In</a>
          </div>
        </form>
      </div>
    </>
  );
}
