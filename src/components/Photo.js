import React from "react";
import { Link } from "react-router-dom";

function Photo({ data }) {
  return (
    <div key={data.id}>
      <Link to={`/photos/${data.id}`}>
        <img src={data.thumbnailUrl} />
      </Link>
    </div>
  );
}

export default Photo;
