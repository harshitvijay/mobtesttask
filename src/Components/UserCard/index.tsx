import { FC } from "react";
import { Card, CardContent, Typography } from "@mui/material";
import Box from "@mui/system/Box";
import UserInterface from "../../commom.interface";
import useStyles from "./style";

const UserCard: FC<{ user: UserInterface }> = ({ user }) => {
  const classes = useStyles();

  return (
    <Card className={classes.userCard}>
      <CardContent className={classes.userCardContent}>
        <Box className={classes.ImageContainer}>
          <img
            src={`https://i.pravatar.cc/?img=${user.id}`}
            className={classes.userImage}
          />
        </Box>

        <Typography className={classes.userName}>{user.name}</Typography>
        <Typography className={classes.userEmail}>{user.email}</Typography>
      </CardContent>
    </Card>
  );
};

export default UserCard;
