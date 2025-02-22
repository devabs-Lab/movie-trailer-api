import React from "react";
import Row from "../row/Row";
import requests from "../../../utils/requests";
function Rowlist() {
  return (
    <div>
      <br />
      <br />
      <br />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixoriginals}
        isLargeRow={true}
      />
      <Row
        title="Trending Now"
        fetchUrl={requests.fetchTrending}
        isLargeRow={true}
      />

      <Row
        title="Top Rated Movies"
        fetchUrl={requests.fetchTopRatedmovies}
        isLargeRow={true}
      />
      <Row
        title="Action Movies"
        fetchUrl={requests.fetchActionMovies}
        isLargeRow={true}
      />
      <Row
        title="Romance Movies"
        fetchUrl={requests.fetchRomanceMovies}
        isLargeRow={true}
      />
      <Row
        title="Comedy Movies"
        fetchUrl={requests.fetchComedyMovies}
        isLargeRow={true}
      />

      <Row
        title="Horror Movies"
        fetchUrl={requests.fetchHorrorMovies}
        isLargeRow={true}
      />
      <Row title="Tv Shows" fetchUrl={requests.fetchTvShow} isLargeRow={true} />
      <Row
        title="Documentaries"
        fetchUrl={requests.fetchDocumentaries}
        isLargeRow={true}
      />
      
    </div>
  );
}

export default Rowlist;
