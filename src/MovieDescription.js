import React, { useEffect, useState } from "react";
import getMovieImg from "./utils/getMovieImg";
import UserRating from "./UserRating";

export default function MovieDescription({ filePath, movie }) {
  const [imgURL, setimgURL] = useState("");
  useEffect(() => {
    getMovieImg(setimgURL, filePath);
  }, [filePath]);

  return (
    <div style={style}>
      <p style={titleStyle}>{movie.title}</p>
      <img alt="movie poster" src={imgURL} style={imgStyle}></img>
      <p style={descriptionStyle}>{movie.overview.substring(0, 200)}...</p>
      <UserRating name="half-rating" defaultValue={2.5} precision={0.5} />
    </div>
  );
}
const style = {
  border: "1px solid black",
  height: "400px",
  marginTop: "30px",
  width: "400px",
  float: "left",
  backgroundColor: "gray",
  marginLeft: "32px",
  borderRadius: "10px",
};

const titleStyle = {
  color: "black",
  fontSize: "20px",
  fontWeight: "bold",
};
const imgStyle = {
  height: "100px",
  width: "100px",
};
const descriptionStyle = {
  color: "black",
  overflow: "hidden",
  fontSize: "16px",
  fontWeight: "bold",
};
