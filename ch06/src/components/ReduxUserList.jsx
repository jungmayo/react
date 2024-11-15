import { useContext } from "react"
import UsersContext from "../context/UsersContext"
import { useSelector } from "react-redux";

export default function ReduxUserList(){

    // usersReducer : store 파일의 reducer 키값
    const users = useSelector((state) => state.usersReducer.users);


    return(
        <div className="ReduxUserList">
        <h5>ReduxUserList</h5>


            <ul>
                {users.map((user, index) => (
                    <li key={index}>
                        {user.uid}, {user.name}, {user.age}
                    </li>
                ))}
            </ul>
        </div>
    )
}