import { createContext } from "react";
import { UserStore } from "./users";

const users = new UserStore();

export class StateStore {
  users = users;
}

export const StateContext = createContext<StateStore>(new StateStore());
