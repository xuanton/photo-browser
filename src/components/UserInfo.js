import React from "react";
import { Card } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import UserField from "./UserField";

function UserInfo({ userData }) {
  return (
    <Card sx={{ p: "20px", width: "300px", margin: "30px" }}>
      <AccountCircleIcon fontSize="large"></AccountCircleIcon>
      <UserField field="Username" value={userData.username}></UserField>
      <UserField field="Name" value={userData.name}></UserField>
      <UserField field="Email" value={userData.email}></UserField>
      <UserField field="Phone" value={userData.phone}></UserField>
      <UserField field="Website" value={userData.website}></UserField>
    </Card>
  );
}

export default UserInfo;
