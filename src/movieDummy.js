import React, { useState } from "react";

const url = "https://image.tmdb.org/t/p/w1280/";

function Movie({ title, vote_average, poster_path, overview }) {
  const t = { display: "block" };
  const f = { display: "none" };

  const [tf, setTf] = useState(false);
  const handleMouseOut = () => {
    setTf(false);
  };

  const handleMouseOver = () => {
    setTf(true);
  };

  return (
    <div
      className="contain"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <img src={url + poster_path} className="imgg" alt={title} />
      <div className="text">
        <h4>{title}</h4>
        <span>{vote_average}</span>
      </div>
      <div className="info" id="info" style={tf ? t : f}>
        <h4>{title}</h4>
        <span>{overview}</span>
      </div>
    </div>
  );
}

export default Movie;
