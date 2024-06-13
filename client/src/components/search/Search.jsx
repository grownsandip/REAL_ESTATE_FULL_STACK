import { useState } from "react";
import "./search.scss";
import { Link } from "react-router-dom";

const types = ["buy", "rent"];

function Search() {
  const [query, setQuery] = useState({
    type: "buy",
    location: "",
    minPrice: 0,
    maxPrice: 0,
  });

  const switchType = (val) => {
    setQuery((prev) => ({ ...prev, type: val }));
  };
  const handleChange = (e) => {
    setQuery((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  return (
    <div className="searchBar">
      <div className="type">
        {types.map((type) => (
          <button
            key={type}
            onClick={() => switchType(type)}
            className={query.type === type ? "active" : ""}
          >
            {type}
          </button>
        ))}
        <form>
          <input
            type="text"
            name="city"
            placeholder="City"
            onChange={handleChange}
          />
          <input
            type="number"
            name="minPrice"
            min={0}
            max={1000000}
            placeholder="Minimum price"
            onChange={handleChange}
          />
          <input
            type="number"
            name="maxPrice"
            min={0}
            max={1000000}
            placeholder="Maximum Price"
            onChange={handleChange}
            />
          <Link to={`/list?type=${query.type}&city=${query.city}&maxPrice=${query.maxPrice}&minPrice=${query.minPrice}`}> 
          <button>
            <img src="./images/search.png" alt="" />
          </button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Search;
