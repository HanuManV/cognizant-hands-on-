import {useState} from "react";
import CurrencyConvertor from "./Components/CurrencyConvertor";
export default function App(){
const [count,setCount]=useState(0);
const increment=()=>setCount(c=>c+1);
const decrement=()=>setCount(c=>c-1);
const sayHello=()=>alert("Hello! Have a great day.");
const welcome=(msg)=>alert(msg);
const onPress=()=>alert("I was clicked");
const multi=()=>{increment();sayHello();};
return(<div style={{fontFamily:"Arial",padding:"20px"}}>
<h1>Event Examples App</h1>
<h2>Counter: {count}</h2>
<button onClick={multi}>Increment</button>
<button onClick={decrement}>Decrement</button><br/><br/>
<button onClick={()=>welcome("Welcome")}>Say Welcome</button><br/><br/>
<button onClick={onPress}>OnPress</button>
<CurrencyConvertor/>
</div>);
}