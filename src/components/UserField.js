import React from "react";
import { Typography } from "@mui/material";

function UserField({ field, value }) {
  return (
    <div>
      <Typography color="text.primary">{field}</Typography>
      <Typography color="text.secondary">{value}</Typography>
    </div>
  );
}

export default UserField;
