import axios from "axios";
import { PRODUCT_URI } from "./_URI";

// 아래 방법은 컴포넌트가 아니라서 훅을 호출 못함
// const { username, accessToken, navigate } = useAuth();

export const postProduct = async (data, token) => {
  try {
    const response = await axios.post(`${PRODUCT_URI}`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`, // 백엔드의 SecurityConfig로 먼저 들어가서 검사처리가 됨 -> security에서 허용되면 controller로 넘어가서 처리됨
      },
    });
    console.log(response.data);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const getProduct = async (pg) => {
  try {
    const response = await axios.get(`${PRODUCT_URI}/${pg}`);
    console.log(response.data);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
