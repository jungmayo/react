import { createContext, useState } from "react";

// Context 객체 생성
const UsersContext = createContext();

// Provider 정의
export const UsersProvider = ({ children }) => {

    const [users, setUsers] = useState([]);


  return (
    <UsersContext.Provider value={{ users, setUsers }}>
      {children}
    </UsersContext.Provider>
  );
};

// 내보내기
export default UsersContext;
