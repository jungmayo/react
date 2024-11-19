import { Link, Route, Routes } from "react-router-dom";
import User1List from "./User2List";
import User1Register from "./User2Register";
import User1Modify from "./User2Modify";

export default function User2Component() {
  return (
    <div className="User2Component">
      <h4>User2</h4>
      <p>
        <Link to="/user2/list">목록</Link>&nbsp;
        <Link to="/user2/register">등록</Link>
      </p>

      <Routes>
        <Route path="/user2/list" element={<User1List />} />
        <Route path="/user2/register" element={<User1Register />} />
        <Route path="/user2/modify" element={<User1Modify />} />
      </Routes>
    </div>
  );
}
