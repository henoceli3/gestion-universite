import { UserInterface } from "./Interfaces";

export function getUser() {
  const user: UserInterface = JSON.parse(
    localStorage.getItem("userBo") || "{}"
  );
  return user;
}