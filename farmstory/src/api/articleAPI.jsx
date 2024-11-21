import axios from "axios";
import { ARTICLE_URI } from "./_URI";
import useAuth from "../hooks/useAuth";

// 아래 방법은 컴포넌트가 아니라서 훅을 호출 못함
// const { username, accessToken, navigate } = useAuth();

export const postArticle = async (data, token) => {
  try {
    const response = await axios.post(`${ARTICLE_URI}`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(response.data);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

// export const postUserLogin = async (data) => {
//   try {
//     const response = await axios.post(`${USER_LOGIN_URI}`, data);
//     console.log(response.data);
//     return response.data;
//   } catch (err) {
//     console.log(err);
//   }
// };
