import { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase";

function ResetPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleReset = async (e) => {
    e.preventDefault();
    try {
      await sendPasswordResetEmail(auth, email);
      setMessage("Password reset email sent!");
      setError("");
    } catch (err) {
      setError(err.message);
      setMessage("");
    }
  };

  return (
    <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
      <h2 className="text-2xl font-bold mb-6">Reset Password</h2>
      {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
      {message && <p className="text-green-500 text-sm mb-2">{message}</p>}
      <form onSubmit={handleReset} className="space-y-4">
        <input type="email" placeholder="Email" className="w-full p-2 border" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">Send Reset Link</button>
      </form>
    </div>
  );
}
export default ResetPassword;
