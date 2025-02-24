import React from "react";
import Row from "../row/Row";
import requests from "../../../utils/requests";
import { fabClasses } from "@mui/material";
function Rowlist() {
  return (
    <div>
      <br />
      <br />
      <br />
      <div id="Trending">
        <Row
          title="Trending Now"
          fetchUrl={requests.fetchTrending}
          isLargeRow={true}
          useswiper={true}
        />
      </div>

      <div id="Netflix">
        <Row
          title="NETFLIX ORIGINALS"
          fetchUrl={requests.fetchNetflixoriginals}
          isLargeRow={false}
          useswiper={false}
        />
      </div>
      <div id="Top">
        <Row
          title="Top Rated Movies"
          fetchUrl={requests.fetchTopRatedmovies}
          isLargeRow={false}
          useswiper={true}
        />
      </div>
      <div id="Action">
        <Row
          title="Action Movies"
          fetchUrl={requests.fetchActionMovies}
          isLargeRow={false}
          useswiper={true}
        />
      </div>
      <div id="Romance">
        <Row
          title="Romance Movies"
          fetchUrl={requests.fetchRomanceMovies}
          isLargeRow={false}
          useswiper={true}
        />
      </div>
      <div id="Comedy">
        <Row
          title="Comedy Movies"
          fetchUrl={requests.fetchComedyMovies}
          isLargeRow={false}
          useswiper={true}
        />
      </div>
      <div id="Horror">
        <Row
          title="Horror Movies"
          fetchUrl={requests.fetchHorrorMovies}
          isLargeRow={false}
          useswiper={true}
        />
      </div>
      <div id="Tv">
        <Row
          title="Tv Shows"
          fetchUrl={requests.fetchTvShow}
          isLargeRow={false}
          useswiper={true}
        />
      </div>
      <div id="Document">
        <Row
          title="Documentaries"
          fetchUrl={requests.fetchDocumentaries}
          isLargeRow={false}
          useswiper={true}
        />
      </div>
    </div>
  );
}

export default Rowlist;
