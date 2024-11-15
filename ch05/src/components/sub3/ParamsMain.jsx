import { useState } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Result1 from "./Result1";
import Result3 from "./Result3";
import Result2 from "./Result2";
const ParamsMain = () => {
  const [formData, setFormDate] = useState({ name: "", email: "", age: 0 });
  const navigate = useNavigate(); // 수동으로 라우팅 처리를 위한 훅

  const changeHandler = (e) => {
    setFormDate({ ...formData, [e.target.name]: e.target.value });
  };

  //입력한게 statesetter로 입력됨 핸들러 -> 위로

  //1번
  const submit1Handler = () => {
    const queryString = `name=${formData.name}&email=${formData.email}&age=${formData.age}`;

    // result1로 라우팅 요청
    navigate(`/result1?${queryString}`);
  };

  //2번
  const submit2Handler = () => {
    const params = `${formData.name}/${formData.email}/${formData.age}`;

    // result1로 라우팅 요청
    navigate(`/result2/${params}`);
  };


    //3번
    const submit3Handler = () => {

        // result1로 라우팅 요청
        navigate(`/result3`, {state : {formData}});
      };

  //prettier-ignore
  return (
        <div className="ParamsMain">
            <h4>라우터 데이터 전송</h4>

            <form>
                <input type="text" name="name" value={formData.name} onChange={changeHandler}/>
                <br/>
                <input type="text" name="email" value={formData.email} onChange={changeHandler}/>
                <br/>
                <input type="number" name="age" value={formData.age} onChange={changeHandler}/>
                <br/>
                <input type="button" value="쿼리 스트링 전송" onClick={submit1Handler}/>
                <br/>
                <input type="button" value="주소 파라미터 전송" onClick={submit2Handler}/>
                <br/>
                <input type="button" value="state 전송" onClick={submit3Handler}/>
                <br/>
                
            </form>

                <Routes>
                    <Route path="/result1" element={<Result1/>}/>
                    <Route path="/result2/:name/:email/:age" element={<Result2/>}/>
                    <Route path="/result3" element={<Result3/>}/>
                </Routes>
        </div>
    );
};

export default ParamsMain;
