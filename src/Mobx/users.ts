import { makeObservable, observable } from "mobx";
import UserInterface from "../commom.interface";

export class UserStore {
  users: UserInterface[];

  constructor() {
    this.users = [];
    makeObservable(this, {
      users: observable,
    });
  }
}
