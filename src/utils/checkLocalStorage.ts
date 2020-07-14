export default function checkLocalStorage(fn: (isLogged: boolean) => void) {
  const userId = localStorage.getItem("user_id");
  if (!userId) {
    return fn(false);
  }
  return fn(true);
}
