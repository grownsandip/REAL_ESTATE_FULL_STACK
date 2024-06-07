import { useContext, useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
import { userData } from "../../lib/dummyData";
import { AuthContext } from "../../context/AuthContext.jsx";
function Navbar() {
  const [open, setOpen] = useState(false);
  const {currentUser}=useContext(AuthContext);
  return (
    <div>
      <nav>
        <div className="left">
          <a href="/" className="logo">
            <img src="./images/dmr.png" alt="logo" />
            <span> Real Estate</span>
          </a>
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Contacts</a>
          <a href="/">Agents</a>
        </div>
        <div className="right">
          {currentUser ? (
            <div className="user">
              <img src={currentUser.avatar || "./images/noavatar.png"} alt="" />
              <span>{currentUser.username}</span>
              <Link to="./profile"className="profile">
                <div className="notification">3</div>
                <span>Profile</span>
              </Link>
            </div>
          ) : (
            <>
              <a href="/login">Sign In</a>
              <a href="/register" className="register">
                Sign Up
              </a>
            </>
          )}
          <div className="menuIcon">
            <img
              src="./images/Menu.png"
              alt="loading"
              onClick={() => setOpen((prev) => !prev)}
            />
          </div>
          <div className={open ? "menu active" : "menu"}>
            <a href="/">Home</a>
            <a href="/">About</a>
            <a href="/">Contacts</a>
            <a href="/">Agents</a>
            <a href="/">Sign in</a>
            <a href="/">Sign up</a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
