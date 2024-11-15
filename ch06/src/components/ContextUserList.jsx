import { useContext } from "react"
import UsersContext from "../context/UsersContext"

export default function ContextUserList(){

    const {users, setUsers} = useContext(UsersContext);
    return(
        <div className="ContextUserList">
        <h5>ContextUserList</h5>
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