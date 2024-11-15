import { Component } from "react"
class StateComponent extends Component {
    state = {
        num1 : 1,
        num2 : 2.
    };
//Prettier-ignore
    render(){
        return(
            <div className="StateComponent">
                <h4>StateComponent</h4>
                <p>
                    상태값 num1 : {this.state.num1}
                </p>
                <button onClick={()=>{this.setState({num1 : this.state.num1 + 1});}}>+</button>
                <button onClick={()=>{this.setState({num1 : this.state.num1 - 1});}}>-</button>
            </div>
        )
    }
}
export default StateComponent;