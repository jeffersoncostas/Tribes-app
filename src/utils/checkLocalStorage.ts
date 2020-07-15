export default function checkLocalStorage(fn: (isLogged: boolean) => void) {
  const userId = localStorage.getItem("token");
  if (!userId) {
    return fn(false);
  }
  return fn(true);
}
