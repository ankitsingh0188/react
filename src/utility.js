export function isLoggedIn() {
  return localStorage.getItem('user') ? true : false;
}