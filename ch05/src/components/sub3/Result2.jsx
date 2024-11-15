import { useParams } from "react-router-dom";

export default function Result2(){

    //주소 보낸 순서대로
    //useParams() : 주소 파라미터 처리를 위한 훅
    const {name, email, age} = useParams();

    return (
        <div className="Result2">
            <span>Result2</span>
            <p>
                이름 : {name} <br/>
                이메일 : {email} <br/>
                나이 : {age} <br/>
            </p>
        </div>
    );
}