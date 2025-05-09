import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";

function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await auth.signOut();
    navigate("/login");
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl mb-4">Dashboard</h1>
      <p className="mb-4">You're logged in!</p>
      <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded">Logout</button>
    </div>
  );
}
export default Dashboard;
