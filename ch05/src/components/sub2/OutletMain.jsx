import { Link, Route, Routes } from "react-router-dom";
import Child1 from "./Child1";
import Child2 from "./Child2";
import Parent from "./Parent";

export default function OutletMain(){
    return(
        <div className="OutletMain">
            <h4>중첩 라우팅</h4>
            <p>
                <Link to="/parent">parent</Link>
                <Link to="/parent/child1">child1</Link>
                <Link to="/parent/child2">child2</Link>
            </p>

            <Routes>
                <Route path="/parent" element={<Parent/>}> 
                    <Route path="/parent/child1" element={<Child1/>}></Route>
                    <Route path="/parent/child2" element={<Child2/>}></Route>
                </Route>
            </Routes>
        </div>
    );
}