import './App.css'
import UseCallbackComponent from './components/UseCallbackComponent'
import UseCounterComponent from './components/UseCounterComponent'
import UseEffectComponent from './components/UseEffectComponent'
import UseMemoComponent from './components/UseMemoComponent'
import UseReducerComponent from './components/UseReducerComponent'
import UseRefComponent from './components/UseRefConponent'
import UseStateComponent from './components/UseStateComponent'
/*
  날짜 : 2024.11.12
  이름 : 정지현
  내용 : ch04.리엑트 훅
*/
function App() {
 
  return (
    <>
     <h3>ch04.react hooks</h3>
     <UseRefComponent/>

    <h4>UserState()</h4>
    <UseStateComponent/>


    <h4>UserReducer()</h4>
    <UseReducerComponent/>

    
    <h4>UserEffect()</h4>
    <UseEffectComponent/>


    <h4>UseMemo()</h4>
    <UseMemoComponent/>

    <h4>UserCallbakc()</h4>
    <UseCallbackComponent/>
    
    <h4>Custom Hook()</h4>
    <UseCounterComponent/>
    </>
  )
}
export default App
