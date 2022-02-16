import { FC } from "react";
import Container from "@mui/material/Container";
import UserCard from "../UserCard";
import UserInterface from "../../commom.interface";
import useStyles from "./style";

const UserCardList: FC<{ data: Array<UserInterface> }> = ({ data }) => {
  const classes = useStyles();

  return (
    <Container className={classes.userCardContainer}>
      {data.map((item) => (
        <UserCard key={item.id} user={item} />
      ))}
    </Container>
  );
};

export default UserCardList;
