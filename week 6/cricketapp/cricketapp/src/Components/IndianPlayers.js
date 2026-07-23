export default function IndianPlayers(){
const team=["Virat","Rohit","Gill","Rahul","Pant","Hardik","Jadeja","Ashwin"];
const odd=team.filter((_,i)=>i%2===0);
const even=team.filter((_,i)=>i%2===1);
const T20players=["Sky","Tilak","Rinku"];
const RanjiPlayers=["Pujara","Rahane","Sarfaraz"];
const merged=[...T20players,...RanjiPlayers];
return <div><h2>Odd Team Players</h2><ul>{odd.map((p,i)=><li key={i}>{p}</li>)}</ul><h2>Even Team Players</h2><ul>{even.map((p,i)=><li key={i}>{p}</li>)}</ul><h2>Merged Players</h2><ul>{merged.map((p,i)=><li key={i}>{p}</li>)}</ul></div>
}