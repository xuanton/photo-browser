import { ImageList, Box, Button, Typography } from "@mui/material";
import { useState } from "react";
import Photo from "./Photo";

function PhotoList({ photosData, albumsData }) {
  let [itemLimit, setLimit] = useState(20);

  return (
    <Box sx={{ margin: "20px" }}>
      <Typography variant="h5">Photo List</Typography>
      <ImageList cols={5}>
        {photosData.map(
          (item) => item.id <= itemLimit && <Photo key={item.id} data={item} />
        )}
      </ImageList>
      {itemLimit < photosData.length && (
        <Button variant="outlined" onClick={() => setLimit(itemLimit + 15)}>
          Load more
        </Button>
      )}
    </Box>
  );
}

export default PhotoList;
