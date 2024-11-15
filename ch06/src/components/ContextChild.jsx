import { useContext } from "react";
import CountContext from "../context/CountContext";

export default function ContextChild() {
  const { count, increase, decrease, reset } = useContext(CountContext);
  return (
    <div className="ContextChild">
      <h5>ContextChild</h5>

      <p>ContextChild count : {count}</p>
      <button onClick={increase}>증가</button>
      <button onClick={decrease}>감소</button>
      <button onClick={() => reset(0)}>리셋</button>
    </div>
  );
}