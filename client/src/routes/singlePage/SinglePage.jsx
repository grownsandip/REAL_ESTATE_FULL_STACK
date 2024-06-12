import "./singlepage.scss";
import Slider from "../../components/slider/Slider";
import Map from "../../components/map/Map";
import { singlePostData, userData } from "../../lib/dummyData";
import { useLoaderData } from "react-router-dom";

function SinglePage() {
  const post =useLoaderData();
  console.log(post);
  return (
    <div className="singlePage">
      <div className="details">
        <div className="wrapper">
          <Slider images={post.images} />
          <div className="info">
            <div className="top">
              <div className="posts">
                <h1>{post.title}</h1>
                <div className="address">
                  <img src="./images/location.png" alt="" />
                  <span>{post.address}</span>
                </div>
                <div className="price">$ {post.price}</div>
              </div>
              <div className="user">
                <img src={post.user.img} alt="" />
                <span>{post.user.name}</span>
              </div>
            </div>
            <div className="bottom">{post.postDetail.desc}</div>
          </div>
        </div>
      </div>
      <div className="features">
        <div className="wrapper">
          <p className="title">General</p>
          <div className="listVertical">
            <div className="feature">
              <img src="./images/utilities.png" alt="" />
              <div className="featureText">
                <span>Utilities</span>
                <p>Renter is responsible</p>
              </div>
            </div>
            <div className="feature">
              <img src="./images/pets.png" alt="" />
              <div className="featureText">
                <span>Pet Policy</span>
                <p>{post.postDetail.pet}</p>
              </div>
            </div>
            <div className="feature">
              <img src="./images/fees.png" alt="" />
              <div className="featureText">
                <span>Property Fees</span>
                <p>{post.postDetail.income}</p>
              </div>
            </div>
          </div>
          <p className="title">Sizes</p>
          <div className="sizes">
            <div className="size">
              <img src="./images/size.png" alt="" />
              <span>{post.postDetail.size}</span>
            </div>
            <div className="size">
              <img src="./images/bed.png" alt="" />
              <span>{post.bedroom}</span>
            </div>
            <div className="size">
              <img src="./images/bath.png" alt="" />
              <span>{post.bathroom}</span>
            </div>
          </div>
          <p className="title">Nearby Places</p>
          <div className="listHorizontal">
            <div className="feature">
              <img src="./images/school.png" alt="" />
              <div className="featureText">
                <span>School</span>
                <p>{post.postDetail.school}</p>
              </div>
            </div>
            <div className="feature">
              <img src="./images/bus.png" alt="" />
              <div className="featureText">
                <span>Bus Stop</span>
                <p>{post.postDetail.bus}</p>
              </div>
            </div>
            <div className="feature">
              <img src="./images/train.png" alt="" />
              <div className="featureText">
                <span>{post.postDetail.rail}</span>
                <p>200m away</p>
              </div>
            </div>
          </div>
          <p className="title">Location</p>
          <div className="mapContainer">
            <Map items={[singlePostData]} />
          </div>
          <div className="buttons">
            <button>
              <img src="./images/chat.png" alt="" />
              Send a Message
            </button>
            <button>
              <img src="./images/save.png" alt="" />
              Save the Place
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SinglePage;
