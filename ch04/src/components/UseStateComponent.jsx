import { useState } from "react";
 
const UseStateComponent = () => {
    //state 선언, State(상태)는 컴포넌트 내부에서 처리되는 값(클래스의 멤버변수와 비슷)
    const [count, setCount] = useState(0);
    const [message, setMessage] = useState("");
    const [today, setToday] = useState(new Date());
    const [user, setUser] = useState({uid:"", name: "", age:0});

    const inputChangeHandler = (e) => {
        setMessage(e.target.value);
    };
    
    return (
        <div className="UseStateComponent">
            <h4>UserStateComponent</h4>
            <p>
                상태값 count : {count}
            </p>
            <button onClick ={()=>{setCount(count + 1)}}>+</button>
            <button onClick ={()=>{setCount(count - 1)}}>-</button>
            <p>
                {message}
            </p>
            <input type = "text" value={message} onChange={inputChangeHandler}/>

            <p>
                상태값 today : {JSON.stringify(today)}
            </p>

            <p>
                아이디 : {user.uid}<br/>
                이름 : {user.name}<br/>
                나이 : {user.age}<br/>
            </p>
            {/**전개 연산자(...)를 사용하여 .. */}
            <input 
                type="text" 
                value={user.uid} 
                onChange={(e) => setUser({...user, uid: e.target.value})} // ...user의 내용을 복사해서 그 값에다가 새로운 값을 넣는 것
            /><br/>

            <input 
                type="text" 
                value={user.name} 
                onChange={(e) => setUser({...user, name: e.target.value})}
            /><br/>

            <input 
                type="text" 
                value={user.age} 
                onChange={(e) => setUser({...user, age: e.target.value})}
            /><br/>
        </div>
    );
};

export default UseStateComponent;