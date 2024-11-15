import { useContext } from "react";
import CountContext from "../context/CountContext";
import { useDispatch, useSelector } from "react-redux";
import { decrease, increase, reset } from "../slices/countSlice";

export default function ReduxChild() {

    // 리덕스 저장소 조회
    const count = useSelector((state)=>state.countReducer.count);

    //리덕스 저장소 리듀서 호출 함수
    const dispatch = useDispatch();
    
  return (
    <div className="ReduxChild">
      <h5>ReduxChild</h5>

      <p>ReduxChild count : {count}</p>
      <button onClick={()=> dispatch(increase())}>증가</button>
      <button onClick={()=> dispatch(decrease())}>감소</button>
      <button onClick={()=> dispatch(reset(0))}>리셋</button>
    </div>
  );
}