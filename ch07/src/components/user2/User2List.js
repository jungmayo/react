import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// 사용자 목록 패치함수
const fetchUsers = async () => {
  const response = await axios.get("http://localhost:8080/ch09/user2");
  return response.data;
};
// 사용자 삭제 함수
const deleteUser = async (user) => {
  const response = await axios.delete(
    `http://localhost:8080/ch09/user2/${user.uid}`
  );
  return response.data;
};

//prettier-ignore
export default function User2List() {
  const navigate = useNavigate();
  // const [users, setUsers] = useState([]);

  // react-query 사용자 훅
  const queryClient = useQueryClient();

  // react-query fetch함수 정의
  const { data : users, isLoading, isError} = useQuery({
                                                queryKey: ["users"],
                                                queryFn : fetchUsers,
                                              });

  const deleteMutation = useMutation({
    mutationFn : deleteUser,
    onSuccess: () => {
      queryClient.invalidateQueries(["users"]);
    },
  });

  // // 컴포넌트 생명주기를 제어하는 훅
  // useEffect(() => {
  //   axios
  //     .get("http://localhost:8080/ch09/user2")
  //     .then((response) => {
  //       console.log(response.data);

  //       // 서버에서 받아온 데이터로 상태 업데이트
  //       setUsers(response.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []); // 의존성(반응형) 배열을 빈배열로 선언하면 컴포넌트가 처음 마운트 될때 한번만 실행

  const modifyMove = (user) => {
    navigate(`/user2/modify?uid=${user.uid}`);
  };

  const deleteProc = (user) => {
    deleteMutation.mutate(user);
    // axios
    //   .delete(`http://localhost:8080/ch09/user2/${user.uid}`)
    //   .then((response) => {
    //     console.log(response.data);

    //     // 목록 갱신을 위해서 상태업데이트 (해당 유저를 제외하고 다시 set하라는 의미)
    //     setUsers(users.filter((u) => u.uid !== user.uid));
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };
  return (
    <div className="User2List">
      <span>User2 목록</span>

      <table border={1}>
        <tr>
          <th>아이디</th>
          <th>이름</th>
          <th>생년월일</th>
          <th>휴대폰</th>
          <th>주소</th>
          <th>관리</th>
        </tr>

        {users?.map((user, index) => (
          <tr key={user.uid}>
            <td>{user.uid}</td>
            <td>{user.name}</td>
            <td>{user.birth}</td>
            <td>{user.hp}</td>
            <td>{user.addr}</td>
            <td>
              <button onClick={() => modifyMove(user)}>수정</button>
              <button onClick={() => deleteProc(user)}>삭제</button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}
