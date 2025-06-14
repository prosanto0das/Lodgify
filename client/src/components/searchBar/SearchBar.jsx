import { useState } from "react";
import "./searchBar.scss";
import { Link } from "react-router-dom";

const types = ["buy", "rent"];

function SearchBar() {
  const [query, setQuery] = useState({
    type: "buy",
    city: "",
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
      </div>
      <form>
        <div className="inputIcon">
          <i className="fa-solid fa-location-dot"></i>
          <input
            type="text"
            name="city"
            placeholder="City"
            onChange={handleChange}
          />
        </div>
        <div className="inputIcon">
          <i className="fa-solid fa-dollar-sign"></i>
          <input
            type="number"
            name="minPrice"
            min={0}
            max={10000000}
            placeholder="Min Price"
            onChange={handleChange}
          />
        </div>
        <div className="inputIcon">
          <i className="fa-solid fa-dollar-sign"></i>
          <input
            type="number"
            name="maxPrice"
            min={0}
            max={10000000}
            placeholder="Max Price"
            onChange={handleChange}
          />
        </div>
        <Link
          to={`/list?type=${query.type}&city=${query.city}&minPrice=${query.minPrice}&maxPrice=${query.maxPrice}`}
        >
          <button>
            <i className="fa-solid fa-magnifying-glass"></i>
            <span>Search</span>
          </button>
        </Link>
      </form>
    </div>
  );
}

export default SearchBar;
