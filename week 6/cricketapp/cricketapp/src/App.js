import ListofPlayers from "./Components/ListofPlayers";
import IndianPlayers from "./Components/IndianPlayers";
export default function App(){
const flag=true;
return <div>{flag?(<><ListofPlayers/><IndianPlayers/></>):<h2>No Data</h2>}</div>;
}