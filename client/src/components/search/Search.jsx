import { useState } from "react";
import "./search.scss";

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
          <input type="text" name="loaction" placeholder="city location" />
          <input
            type="number"
            name="minPrice"
            min={0}
            max={1000000}
            placeholder="Minimum price"
          />
          <input
            type="number"
            name="maxPrice"
            min={0}
            max={1000000}
            placeholder="Maximum Price"
          />
          <button>
            <img src="./images/seach.png" alt="" />
          </button>
        </form>
      </div>
    </div>
  );
}

export default Search;
