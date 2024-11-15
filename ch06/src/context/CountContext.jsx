import { createContext, useState } from "react";

// Context 객체 생성
const CountContext = createContext();

// Provider 정의
export const CountProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };
  const decrease = () => {
    setCount(count - 1);
  };
  const reset = (value) => {
    setCount(value);
  };

  return (
    <CountContext.Provider value={{ count, increase, decrease, reset }}>
      {children}
    </CountContext.Provider>
  );
};

// 내보내기
export default CountContext;
