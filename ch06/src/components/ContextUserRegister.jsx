import { useContext } from "react";
import { useState } from "react";
import UsersContext from "../context/UsersContext";

export default function ContextUserRegister(){

    const {users, setUsers} = useContext(UsersContext);

    const [user, setUser] = useState({uid: "", name : "", age: 0});

    const changeHandler = (e) => {
        e.preventDefault();
        setUser({...user, [e.target.name]: e.target.value});
    } ;

    const submitHandler = (e)=>{
        e.preventDefault();
    //컨텍스트 users 상태 업데이트
    setUsers([...users, user]);
    };
    

    return(
        <div className="ContextUserRegister">
        <h5>ContextUserRegister</h5>
        <form onSubmit={submitHandler}>
            <input type="text" name="uid" value={null} onChange={changeHandler}/><br/>
            <input type="text" name="name" value={null} onChange={changeHandler} /><br/>
            <input type="text" name="age" value={null} onChange={changeHandler} /><br/>
            <input type="submit" value="저장" /><br/>
        </form>
        </div>
    );
}
