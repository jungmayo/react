import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { postUserLogin } from "../../api/userAPI";
import { useDispatch } from "react-redux";
import { login } from "../../slices/userSlice";

const initState = {
  uid: "",
  pass: "",
};

export default function Login() {
  const [user, setUser] = useState({ ...initState });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const changeHandler = (e) => {
    e.preventDefault();
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    //로그인 (끝나고 리턴돼서 실행되도록)
    const tokens = await postUserLogin(user);
    console.log("tokens : " + JSON.stringify(tokens));

    if (tokens) {
      dispatch(login(tokens));
      //메인전환
      navigate("/");
    } else {
      alert("로그인에 실패했습니다. 아이디와 비밀번호를 확인하세요");
    }

    //리덕스 reducer(login) 호출
  };

  return (
    <section className="login">
      <form onSubmit={submitHandler}>
        <table border="0">
          <tr>
            <td>
              <img src="/images/login_ico_id.png" alt="아이디" />
            </td>
            <td>
              <input
                type="text"
                name="uid"
                placeholder="아이디 입력"
                value={user.uid}
                onChange={changeHandler}
              />
            </td>
          </tr>
          <tr>
            <td>
              <img src="/images/login_ico_pw.png" alt="비밀번호" />
            </td>
            <td>
              <input
                type="password"
                name="pass"
                placeholder="비밀번호 입력"
                value={user.pass}
                onChange={changeHandler}
              />
            </td>
          </tr>
        </table>
        <input type="submit" value="로그인" className="btnLogin" />
      </form>
      <div>
        <h3>회원 로그인 안내</h3>
        <p>아직 회원이 아니시면 회원으로 가입하세요.</p>
        <div style={{ textAlign: "right" }}>
          <a href="../find/userid.html">아이디 |</a>
          <a href="../find/password.html">비밀번호찾기 |</a>
          <Link to="/user/terms">회원가입</Link>
        </div>
      </div>
    </section>
  );
}
