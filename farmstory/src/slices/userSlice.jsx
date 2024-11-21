import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const loadStateFromCookie = () => {
  const auth = JSON.parse(Cookies.get("auth") || null);

  const username = auth?.username;
  const role = auth?.role;
  const accessToken = auth?.accessToken;

  return { username, role, accessToken };
};

const initState = {
  username: "",
  role: "",
  accessToken: "",
  refreshToken: "",
};

// 쿠키값으로 초기화 없으면 null
const userSlice = createSlice({
  name: "userSlice",
  initialState: loadStateFromCookie() || initState,
  //함수 나중에 dispatch로 호출
  reducers: {
    login: (state, action) => {
      const data = action.payload;
      console.log(`userSlice Login data:` + JSON.stringify(data));

      state.username = data.username;
      state.role = data.role;
      state.accessToken = data.accessToken;

      //새로고침하면 다 날라감 (영구저장 X)
      //영구 저장을 원하면 쿠키에 저장 COOKIE!
      Cookies.set("auth", JSON.stringify(data));
    },
    logout: (state) => {
      console.log("로그아웃...");

      
      //상태 초기화
      state.username = null;
      state.role = null;
      state.accessToken = null;

      // 쿠키삭제
      Cookies.remove("auth");

      // // 초기값이었던 빈문자열로 return 된다는 의미
      // return { ...initState };
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
