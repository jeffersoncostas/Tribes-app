import { useEffect, memo } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { ApplicationState } from "store";
import { loadRequest as loadUser, logoutUser } from "store/ducks/user";
import { REDIRECT_PATHS } from "constants_app";

const CheckUserLogged = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const data = useSelector((state: ApplicationState) => state.user.data);
  const dispatch = useDispatch();

  useEffect(() => {
    listener();
    window.onstorage = listener;
  }, []);

  useEffect(() => {
    listener();
  }, [data]);

  const listener = async () => {
    const userId = localStorage.getItem("token");
    console.log("entrei qui", location);
    if (!userId && !data) {
      navigate("/login");
      dispatch(logoutUser());
    }
    if (!data && userId) {
      dispatch(loadUser());
      checkLocationPath() && navigate("/feed");
    }
  };

  const checkLocationPath = () => {
    return REDIRECT_PATHS.includes(location.pathname);
  };
  return null;
};

export default memo(CheckUserLogged);
