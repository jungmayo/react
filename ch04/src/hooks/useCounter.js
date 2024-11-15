import { useReducer } from "react";

export default function useCounter(init, step){
    //상태처리함수정의
    const [state, dispatch] = useReducer(
        (state, action)=>{
        switch(action.type){
            case "update":
                return {count: state.count + action.step};
            case "reset":
                return {count: action.init};
            default:
                return state;
        }
        }, 
        {count : init}
    );

    //핸들러 정의
    const btnUp = () => dispatch({type : "update", step: step});
    const btnDown = () => dispatch({type : "update", step: -step});
    const btnReset = () => dispatch({type : "update", init});

    //사용자 정의 혹은 일반적으로 배열로 반환
    return [state, btnUp, btnDown, btnReset];
}