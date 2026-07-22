import {useState} from "react";

function GuestPage(){
  const flights=[
    {id:101,from:"Hyderabad",to:"Delhi",fare:5200},
    {id:102,from:"Chennai",to:"Mumbai",fare:4600},
    {id:103,from:"Bengaluru",to:"Kolkata",fare:6100}
  ];
  return(
    <div>
      <h2>Guest User</h2>
      <p>Browse available flights. Please login to book tickets.</p>
      <table border="1" cellPadding="8">
        <thead><tr><th>Flight</th><th>From</th><th>To</th><th>Fare</th></tr></thead>
        <tbody>
        {flights.map(f=><tr key={f.id}><td>{f.id}</td><td>{f.from}</td><td>{f.to}</td><td>₹{f.fare}</td></tr>)}
        </tbody>
      </table>
    </div>
  );
}

function UserPage(){
  return(
    <div>
      <h2>Welcome User</h2>
      <p>You are logged in.</p>
      <button onClick={()=>alert("Ticket Booked Successfully!")}>Book Ticket</button>
    </div>
  );
}

export default function App(){
  const [loggedIn,setLoggedIn]=useState(false);
  return(
    <div style={{fontFamily:"Arial",padding:"20px"}}>
      <h1>Ticket Booking App</h1>
      {loggedIn?
        <button onClick={()=>setLoggedIn(false)}>Logout</button>:
        <button onClick={()=>setLoggedIn(true)}>Login</button>}
      <hr/>
      {loggedIn?<UserPage/>:<GuestPage/>}
    </div>
  );
}
