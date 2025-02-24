import React, { useEffect, useState } from "react";
import "./row.css";
import { Pagination, Mousewheel } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/swiper-bundle.css";
import axios from "../../../utils/axios";
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";

function Row({ title, fetchUrl, isLargeRow, useswiper }) {
  const [overlay, setOverlay] = useState(false);
  const [movies, setMovie] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  const base_url = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    (async () => {
      try {
        const request = await axios.get(fetchUrl);
        const allUrls = request.data.results?.filter(
          (item) => item.poster_path && item.backdrop_path
        );

        setMovie(allUrls);
      } catch (error) {
        console.log("error", error);
      }
    })();
  }, []);

  const handleClick = (movie) => {
    if (trailerUrl) {
      removeoverlay();
      setTrailerUrl("");
      handlePauseAnimation();
    } else {
      movieTrailer(movie?.title || movie?.name || movie?.original_name)
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          // console.log(urlParams);
          // console.log(urlParams.get("v"));
          setTrailerUrl(urlParams.get("v"));
          handlePauseAnimation();
        })
        .catch((error) => {
          console.log(error);
          removeoverlay();
        });
    }
  };

  const removeoverlay = () => {
    const rowPosters = document.querySelector(".ok");
    rowPosters.classList.remove("overlayyy");
    const rowPosterss = document.querySelectorAll(".row_poster");
    rowPosterss.forEach((poster) =>
      poster.classList.remove("row_Posterchange")
    );
  };

  const handlePauseAnimation = () => {
    const rowPosters = document.querySelector(".row_posters");
    if (rowPosters) {
      rowPosters.style.animationPlayState =
        rowPosters.style.animationPlayState === "paused" ? "running" : "paused";
    }
  };

  const overlayonclickimg = () => {
    const rowPosters = document.querySelector(".ok");
    if (rowPosters) {
      rowPosters.classList.toggle("overlayyy");
    }
  };

  const eventer = (event) => {
    const clickedImage = event.target; // Get the clicked image
    if (clickedImage.classList.contains("row_poster")) {
      clickedImage.classList.toggle("row_Posterchange");
    }
  };

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <>
      <h1>{title}</h1>
      <div className="ok" onClick={handleClick}></div>

      <div
        className="row"
        style={{
          "--width": "150px",
          "--height": "250px",
          "--quantity": 20,
        }}
      >
        <div
          className="row_posters"
          style={{
            "--position": 1,
            animation: isLargeRow
              ? "marquee 200s linear infinite"
              : "marqueeLarge 300s linear infinite",
          }}
        >
          {isLargeRow
            ? [...movies, ...movies]?.map((movie, index) => (
                <div className="items">
                  <img
                    onClick={(event) => {
                      handleClick(movie);
                      if (!overlay) overlayonclickimg();
                      eventer(event);
                    }}
                    key={index}
                    src={`${base_url}${
                      isLargeRow ? movie.poster_path : movie.backdrop_path
                    }`}
                    alt={movie.name}
                    className={`row_poster ${isLargeRow && "row_posterLarge"} `}
                  />
                </div>
              ))
            : !useswiper
            ? [...movies, ...movies]?.map((movie, index) => (
                <div className="fororiginals">
                  <img
                    onClick={(event) => {
                      handleClick(movie);
                      if (!overlay) overlayonclickimg();
                      eventer(event);
                    }}
                    key={index}
                    src={`${base_url}${
                      isLargeRow ? movie.poster_path : movie.backdrop_path
                    }`}
                    alt={movie.name}
                    className={`row_poster ${isLargeRow && "row_posterLarge"} `}
                  />
                </div>
              ))
            : ""}
        </div>
        <Swiper
          modules={[Pagination, Mousewheel]}
          spaceBetween={10}
          slidesPerView={5}
          pagination={{ clickable: true }}
          mousewheel={{ forceToAxis: true, sensitivity: 2 }}
          breakpoints={{
            0: { slidesPerView: 2 },
            600: { slidesPerView: 3 },
            900: { slidesPerView: 4 },
            1200: { slidesPerView: 5 },
          }}
        >
          {useswiper && !isLargeRow
            ? movies.map((movie, index) => (
                <SwiperSlide key={index}>
                  <img
                    onClick={() => handleClick(movie)}
                    src={`${base_url}${
                      isLargeRow ? movie.poster_path : movie.backdrop_path
                    }`}
                    alt={movie.name}
                    className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                  />
                </SwiperSlide>
              ))
            : ""}
        </Swiper>
      </div>
      <div className="short" style={{ padding: "20px" }}>
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      </div>
     
    </>
  );
}

export default Row;
