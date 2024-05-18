export function getUser() {
  const user = JSON.parse(localStorage.getItem("userBo") || "{}");
  return user;
}


export function getRole(){
  const role = JSON.parse(localStorage.getItem("role") || "{}");
  return role;
}