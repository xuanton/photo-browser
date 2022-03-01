import { Stack, Button, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import FolderIcon from "@mui/icons-material/Folder";

function AlbumList({ albumsData }) {
  return (
    <Stack spacing={2} sx={{ margin: "20px" }}>
      <Typography variant="h5">Album List</Typography>
      {albumsData.map((item) => (
        <Button color="inherit" key={item.id}>
          <FolderIcon></FolderIcon>
          <Link
            to={`/albums/${item.id}`}
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            Album {item.id}
          </Link>
        </Button>
      ))}
    </Stack>
  );
}

export default AlbumList;
