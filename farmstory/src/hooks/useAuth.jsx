import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const useAuth = () => {
  const userSlice = useSelector((state) => state.userSlice);
  const username = userSlice.username;
  const accessToken = userSlice.accessToken;
  const navigate = useNavigate();

  return { navigate, username, accessToken };
};

export default useAuth;
