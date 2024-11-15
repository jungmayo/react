
import { useDispatch, useSelector } from "react-redux";
import ReduxChild from "./ReduxChild";
import { decrease, increase, reset } from "../slices/countSlice";

export default function ReduxParent() {

  // 리덕스 저장소 조회
  const count = useSelector((state)=>state.countReducer.count);

  //리덕스 저장소 리듀서 호출 함수
  const dispatch = useDispatch();
  

  return (
    <div className="ReduxParent">
      <h5>ReduxParent</h5>

      <p>ReduxParent count : {count}</p>
      <button onClick={()=> dispatch(increase())}>증가</button>
      <button onClick={()=> dispatch(decrease())}>감소</button>
      <button onClick={()=> dispatch(reset(0))}>리셋</button>

      <ReduxChild/>

    </div>
  );
}