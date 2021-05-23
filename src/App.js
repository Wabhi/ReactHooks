import "./styles.css";
import UseEffect from "./UseEffect";
import UseRef from "./UseRef";
import UseState from "./UseState";
export default function App() {
  return (
    <div className="App">
      <h1>React Hooks</h1>
      <h4>React hooks only made for functional component</h4>
      <h4>Don’t call Hooks inside loops, conditions, or nested functions</h4>
      <h4>Don’t call Hooks from regular JavaScript functions</h4>
      <h4>You can call Hooks from custom Hooks</h4>
      <ol>
        <li>useState</li>
        <li>useEffect</li>
        <li>useRef</li>
        <li>useCallBack</li>
        <li>useMemo</li>
        <li>useContext</li>
        <li>useReducer</li>
        <li>customHook</li>
      </ol>
      {/* <UseState /> */}
      {/* <UseEffect /> */}
      {/* <UseRef /> */}
    </div>
  );
}
