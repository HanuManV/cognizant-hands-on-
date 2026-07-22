const offices=[
{name:"Tech Park A",rent:55000,address:"Hyderabad",image:"https://picsum.photos/300/180?1"},
{name:"Business Hub",rent:75000,address:"Bengaluru",image:"https://picsum.photos/300/180?2"},
{name:"Corporate Plaza",rent:62000,address:"Chennai",image:"https://picsum.photos/300/180?3"}
];

export default function App(){
  const office={name:"Prime Space",rent:58000,address:"Pune"};
  return(
    <div>
      <h1>Office Space Rental App</h1>
      <img src="https://picsum.photos/300/180" alt="Office Space"/>
      <h2>Single Office</h2>
      <p><b>Name:</b> {office.name}</p>
      <p><b>Rent:</b> <span style={{color:office.rent<60000?"red":"green"}}>{office.rent}</span></p>
      <p><b>Address:</b> {office.address}</p>
      <h2>Available Office Spaces</h2>
      {offices.map((o,i)=>(
        <div className="card" key={i}>
          <img src={o.image} alt={o.name}/>
          <p><b>Name:</b> {o.name}</p>
          <p><b>Rent:</b> <span style={{color:o.rent<60000?"red":"green"}}>{o.rent}</span></p>
          <p><b>Address:</b> {o.address}</p>
        </div>
      ))}
    </div>
  );
}
