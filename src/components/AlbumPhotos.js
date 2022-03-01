import React from "react";
import Photo from "./Photo";
import { Typography, ImageList } from "@mui/material";
import { useParams } from "react-router-dom";
import BackButton from "./BackButton";

function AlbumPhotos({ albumsData, photosData }) {
  const albumId = useParams().id;
  return (
    <div>
      <Typography variant="h5">Album {albumId}</Typography>
      {albumsData.map(
        (item) =>
          item.id == albumId && (
            <Typography key={item.id}>Caption: {item.title}</Typography>
          )
      )}
      <BackButton></BackButton>
      <ImageList cols={5}>
        {photosData.map(
          (item) =>
            item.albumId == albumId && <Photo key={item.id} data={item} />
        )}
      </ImageList>
    </div>
  );
}

export default AlbumPhotos;
