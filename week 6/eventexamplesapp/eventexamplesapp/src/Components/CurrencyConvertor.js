import {useState} from "react";
export default function CurrencyConvertor(){
const [rupees,setRupees]=useState("");
const [euro,setEuro]=useState("");
const handleSubmit=()=>setEuro((Number(rupees)/90).toFixed(2));
return(<div>
<h2>Currency Convertor</h2>
<input type="number" value={rupees} onChange={e=>setRupees(e.target.value)} placeholder="Indian Rupees"/>
<button onClick={handleSubmit}>Convert</button>
<p>Euro: {euro}</p>
</div>);
}