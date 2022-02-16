import { FC, useContext, useEffect } from "react";
import { observer } from "mobx-react-lite";
import LandingPage from "./Container/LandingPage";
import { StateContext, StateStore } from "./Mobx/store";
import { fetchUsers } from "./service";
import { url } from "./constants";
import "./App.css";

const App: FC = observer(() => {
  const state: StateStore = useContext(StateContext);
  useEffect(() => {
    fetchUsers(url).then((users) => (state.users.users = users));
  }, []);

  return <LandingPage />;
});

export default App;
