import { Component } from "react"

class ChildComponent extends Component {
    render(){
        return(
            <div className="ChildComponent">
                <h4>ChildComponent</h4>
                <p>자식 컴포넌트입니다.</p>
            </div>
        );
    }
}

export default ChildComponent;