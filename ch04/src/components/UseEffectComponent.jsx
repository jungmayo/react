import { useEffect, useState } from "react";


export default function UseEffectCompontne(){
    const [name, setName] = useState("홍길동");
    const [age, setAge] = useState(0);


    // mount 단계
    useEffect(() => {
        console.log("UseEffectCompontne mount!!!! ")

        // 페치함수 여기 들어감

        return ()=>{
            // unmount 단계 (state가 클라이언트에서 없어질떄 호출됨)
            console.log("UseEffectCompontne unmount!!!! ")
        }
    }, []);

    // update 단계 (이건 모든 업데이트에 값이 나옴)
    useEffect(() => {
        // 
        console.log("UseEffectCompontne update!!!! ")
    });

    // 의존성 배열의 state값이 수정될때 호출 (이거 자주 많이 사요암)
    useEffect(() => {
        // 
        console.log("UseEffectCompontne name update!!!! ")
    }, [name] , [age]);

    return(
        <div className="UseEffectCompontne">
            <h4>UseEffectCompontne</h4>

            <p>이름 : {name}</p>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <p>나이 : {age}</p>
            <input type="text" value={age} onChange={(e) => setAge(e.target.value)} />
        </div>
    );
}