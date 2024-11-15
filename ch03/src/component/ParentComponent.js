import { Component } from "react"
import ChildComponent from "./ChildComponent";

class ParentComponent extends Component {
    render(){
        return(
            <div className="ParentComponent">
                <h4>ParentComponent</h4>
                <p>부모 컴포넌트입니다.</p>
                {/* 자식 컴포넌트 중첩 */}
                <ChildComponent/>
            </div>
        );
    }
}

export default ParentComponent;