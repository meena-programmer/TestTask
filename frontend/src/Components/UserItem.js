import { Box, Divider, Typography } from "@mui/material";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import { useRef } from "react";

function UserItem({ user }) {
  const { name, email } = user;

  console.log("user", user);
  const ref = useRef();

  const handleListItemClick = () => {
    console.log(ref.current);
  };

  return (
    <>
      <ListItem ref={ref} onClick={handleListItemClick}>
        <ListItemText
          primary={
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <PersonIcon sx={{ p: 1 }} fontSize="medium" />
              <Typography
                sx={{ display: "inline-block" }}
                component="h6"
                variant="h6"
                color="#27374D"
              >
                {name}
              </Typography>
            </Box>
          }
          secondary={
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <EmailIcon sx={{ p: 1 }} fontSize="small" />
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="#526D82"
              >
                {email}
              </Typography>
            </Box>
          }
        />
      </ListItem>
      <Divider component="li" />
    </>
  );
}

export default UserItem;
