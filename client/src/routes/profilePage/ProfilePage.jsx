import "./profilePage.scss";
import List from "../../components/list/List";
import Chat from "../../components/chat/Chat";
import apiRequest from "../../lib/apiRequest.js";
import { Link, useNavigate } from "react-router-dom";
import { useContext} from "react";
import { AuthContext } from "../../context/AuthContext.jsx";
function ProfilePage() {
  const { updateUser, currentUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await apiRequest.post("/auth/logout");
      updateUser(null);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
      <div className="profilePage">
        <div className="details">
          <div className="wrapper">
            <div className="title">
              <h1>User Information</h1>
              <Link to="/profile/update">
              <button>Update Profile</button>
              </Link>
            </div>
            <div className="info">
              <span>
                Avatar:
                <img
                  src={currentUser.avatar || "./images/noavatar.png"}
                  alt=""
                />
              </span>
              <span>UserName:{currentUser.username}</span>
              <span>Email:{currentUser.email}</span>
              <button onClick={handleLogout}>Logout</button>
            </div>
            <div className="title">
              <h1>My List</h1>
              <button>Create New Posts</button>
            </div>
            <List />
            <div className="title">
              <h1>Saved Posts</h1>
            </div>
            <List />
          </div>
        </div>
        <div className="chatContainer">
          <div className="wrapper">
            <Chat />
          </div>
        </div>
      </div>
  );
}

export default ProfilePage;
