import * as React from "react";
import List from "@mui/material/List";
import UserItem from "./UserItem";
import { Box, Button, Typography } from "@mui/material";
import HowToRegIcon from "@mui/icons-material/HowToReg";

// header part of user list
function Header({ setOpen }) {
  return (
    <Box
      sx={{
        width: 400,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        p: 5,
      }}
    >
      <Typography variant="h6" color="#27374D">
        USER LIST
      </Typography>
      <Button
        variant="contained"
        sx={{ bgcolor: "#27374D" }}
        startIcon={<HowToRegIcon />}
        onClick={() => setOpen(true)}
      >
        Register User
      </Button>
    </Box>
  );
}

export default function UserList(props) {
  const { userData, setOpen } = props;

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        p: 5,
      }}
    >
      <Header setOpen={setOpen} />
      <List
        sx={{
          width: "100%",
          maxWidth: 550,
          borderRadius: "4px",
          boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
          bgcolor: "#9DB2BF",
          borderWidth: 2,
        }}
      >
        {userData.length ? (
          userData.map((data) => <UserItem user={data} />)
        ) : (
          <Typography variant="h6" align="center" color="#DDE6ED">
            No Data Found!
          </Typography>
        )}
      </List>
    </Box>
  );
}
