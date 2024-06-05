import "./profilePage.scss"
import { userData } from "../../lib/dummyData";
import List from "../../components/list/List";
import Chat from "../../components/chat/Chat";
function ProfilePage() {
  return (
    <div className="profilePage">
      <div className="details">
        <div className="wrapper">
            <div className="title">
                <h1>User Information</h1>
                <button>Upadate Profile</button>
            </div>
            <div className="info">
                <span>
                    Avatar:
                    <img src={userData.img} alt=""/>
                </span>
                <span>UserName:{userData.name}</span>
                <span>Email:{userData.mail}</span>
            </div>
            <div className="title">
                <h1>My List</h1>
                <button>Create New Posts</button>
            </div>
            <List/>
            <div className="title">
                <h1>Saved Posts</h1>
            </div>
            <List/>
        </div>
      </div>
      <div className="chatContainer">
        <div className="wrapper">
          <Chat/>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage
