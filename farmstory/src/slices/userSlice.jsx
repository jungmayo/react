import { createSlice } from "@reduxjs/toolkit";
const initState = {
  username: "",
  role: "",
  accessToken: "",
  refreshToken: "",
};

const userSlice = createSlice({
  name: "userSlice",
  initialState: initState,
  //함수 나중에 dispatch로 호출
  reducers: {
    login: (state, action) => {
      const data = action.payload;
      console.log(`userSlice Login data:` + JSON.stringify(data));

      state.username = data.username;
      state.role = data.role;
      state.accessToken = data.accessToken;
      state.refreshToken = data.refreshToken;

      //새로고침하면 다 날라감 (영구저장 X)
      //영구 저장을 원하면 쿠키에 저장
    },
    logout: (state) => {
      console.log("로그아웃...");
      // 쿠키삭제

      // 초기값이었던 빈문자열로 return 된다는 의미
      return { ...initState };
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
