import { FC, useContext } from "react";
import LandingPage from "./Container/LandingPage";
import { StateContext, StateStore } from "./Mobx/store";
import { observer } from "mobx-react-lite";
import { fetchUsers } from "./service";
import { url } from "./constants";
import "./App.css";

const App: FC = observer(() => {
  const state: StateStore = useContext(StateContext);
  fetchUsers(url).then((users) => (state.users = users));
  return <LandingPage />;
});

export default App;
