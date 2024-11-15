import { useSearchParams } from "react-router-dom";

export default function Result1(){


    //
    const [searchParams] = useSearchParams();

    const name = searchParams.get("name");
    const email = searchParams.get("email");
    const age = searchParams.get("age");


    return (
        <div className="Result1">
            <span>Result1</span>
            <p>
                이름 : {name} <br/>
                이메일 : {email} <br/>
                나이 : {age} <br/>
            </p>
        </div>
    );
}