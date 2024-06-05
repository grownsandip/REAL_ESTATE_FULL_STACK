import Search from "../../components/search/Search";
import "./home.scss";
function Home() {
  return (
    <div className="home">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">Find your best suited place to live</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi ut
            expedita, nam aut perferendis dolorem eos? Incidunt quis magni
            tempora autem, earum ipsum eaque officia cupiditate, repellendus
            voluptas ea minima!
          </p>
          <Search/>
          <div className="boxes">
            <div className="box">
              <h1>16+</h1>
              <h2>years of experience</h2>
              </div>
              <div className="box">
              <h1>200</h1>
              <h2>Award gained</h2>
              </div>
              <div className="box">
              <h1>2000+</h1>
              <h2>Property ready</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="./images/bg.webp" alt="" />
      </div>
    </div>
  );
}

export default Home;
