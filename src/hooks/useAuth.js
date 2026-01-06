import { useSelector, useDispatch } from "react-redux";
import { setUser, logout } from "../store/userSlice";

export const useAuth = () => {
  const dispatch = useDispatch();
  const { user, isAuthenticated } = useSelector((state) => state.user);

  const login = (userData) => {
    dispatch(setUser(userData));
  };

  const logoutUser = () => {
    dispatch(logout());
  };

  return { user, isAuthenticated, login, logoutUser };
};
