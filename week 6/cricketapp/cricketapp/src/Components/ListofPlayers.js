export default function ListofPlayers(){
const players=[
{name:"P1",score:80},{name:"P2",score:60},{name:"P3",score:75},{name:"P4",score:50},{name:"P5",score:95},{name:"P6",score:66},{name:"P7",score:78},{name:"P8",score:45},{name:"P9",score:88},{name:"P10",score:69},{name:"P11",score:91}
];
const low=players.filter(p=>p.score<70);
return <div><h2>All Players</h2><ul>{players.map((p,i)=><li key={i}>{p.name} - {p.score}</li>)}</ul><h2>Scores Below 70</h2><ul>{low.map((p,i)=><li key={i}>{p.name} - {p.score}</li>)}</ul></div>
}