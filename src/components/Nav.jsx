import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

function Nav() {
  const { user, logout } = useAuth();

  function handleLogout() {
    logout();
  }

  return (
    <nav>
      <Link to="/">Home</Link> |{" "}
      <Link to="/favorites">Favorites</Link> |{" "}
      <Link to="/about">About</Link> |{" "}

      {!user ? (
        <>
          <Link to="/login">Login</Link> |{" "}
          <Link to="/register">Register</Link>
        </>
      ) : (
        <button onClick={handleLogout}>Logout</button>
      )}
    </nav>
  );
}

export default Nav;