import logo from './logo.svg';
import './App.css';
import ClassTypeComponent from './component/ClassTypeComponent';
import FunctionTypeComp from './component/FunctionTypeComp';
import ParentComponent from './component/ParentComponent';
import PropsComponent from './component/PropsComponent';
import ContentConponent from './component/ContentComponent';
import StateComponent from './component/StateConponent';
import LifeCycleComponent from './component/LifeCycleComponent';
/*
  날짜 : 2024.11.12
  이름 : 정지현
  내용 : ch03 컴포넌트 실습
*/

function App() {
  return (
    <div className="App">
      <h3>ch03.리액트 컴포넌트</h3>

      <ClassTypeComponent/>
      <FunctionTypeComp/>
      <ParentComponent/>
      <PropsComponent 
        tit="프로퍼티 컴포넌트" 
        message="속성을 갖는 컴포넌트입니다."/>
      <ContentConponent>
        <p>내용을 갖는 컴포넌트 임다.</p>
      </ContentConponent>

      <StateComponent/>
      <LifeCycleComponent/>
    </div>
  );
}

export default App;
