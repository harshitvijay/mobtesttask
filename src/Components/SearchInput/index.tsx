import { FC, useState, useContext } from "react";
import Container from "@mui/material/Container";
import Input from "@mui/material/Input";
import useStyles from "./style";
import UserCardList from "../UserCardList";
import { StateContext, StateStore } from "../../Mobx/store";
import { observer } from "mobx-react-lite";

const SearchInput: FC = observer(() => {
  const classes = useStyles();
  const [query, setQuery] = useState("");
  const state: StateStore = useContext(StateContext);
  const data = state.users.users;

  return (
    <>
      <Container className={classes.searchContainer}>
        <Input
          placeholder="Search Monster"
          className={classes.searchStyle}
          onChange={(event) => setQuery(event.target.value)}
        />
      </Container>
      <UserCardList
        // eslint-disable-next-line array-callback-return
        data={data.filter((user) => {
          if (query === "") {
            return user;
          } else if (user.name.toLowerCase().includes(query.toLowerCase())) {
            return user;
          }
        })}
      />
    </>
  );
});

export default SearchInput;
