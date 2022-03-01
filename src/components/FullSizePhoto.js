import React from "react";
import { Box, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import BackButton from "./BackButton";

function FullSizePhoto({ photosData }) {
  const id = useParams().id;

  return (
    <Box sx={{ margin: "20px" }}>
      {photosData.map(
        (item) =>
          item.id == id && (
            <div key={item.id}>
              <img alt={item.title} src={item.url} />
              <Typography>Caption: {item.title}</Typography>
            </div>
          )
      )}
      <BackButton></BackButton>
    </Box>
  );
}

export default FullSizePhoto;
