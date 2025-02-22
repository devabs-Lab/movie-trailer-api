import React, { useEffect, useState } from "react";
import axios from "../utils/axios";
import requests from "../utils/requests";
import "./banner.css";

function Banner() {
  const [movie, setMovie] = useState({});
  useEffect(() => {
    (async () => {
      try {
        const request = await axios.get(requests.fetchNetflixoriginals);
        console.log(request);
        setMovie(
          request.data.results[
            Math.floor(Math.random() * request.data.results.length)
          ]
        );
      } catch (error) {
        console.log("error", error);
      }
    })();
  }, []);
  function truncate(str, n) {
    return str?.length > n ? str.slice(0, n) + "..." : str;
  }
  return (
    <>
      <div
        className="banner"
        style={{
          backgroundImage: `url('https://image.tmdb.org/t/p/original${movie?.backdrop_path}')`,
          backgroundSize: "cover",
          backgroundRepeat: "center",
          backgroundPosition: "no-repeat",
        }}
      >
        <div className="banner_contents">
          <h1 className="banner_title">
            {movie?.title || movie?.name || movie?.original_name}
          </h1>
          <div className="banner_buttons">
            <button className="banner_button play">play</button>
            <button className="banner_button">My lists</button>
          </div>
          <h1 className="banner_description">
            {truncate(movie?.overview, 150)}
          </h1>
        </div>
      </div>
    </>
  );
}

export default Banner;
