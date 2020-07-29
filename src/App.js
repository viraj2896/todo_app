import React, { useState, useEffect } from 'react';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import Todo from './Todo';
import './App.css';
import db from './firebase';
import firebase from 'firebase';

function App() {
const [todos, setTodos] = useState([]);
const [input, setInput] = useState('');

//when the app loads, we need to listen to the database and fetch new todos as they get added/removed
useEffect(() => {
//this code here... fires when the app.js loads
db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
 setTodos(snapshot.docs.map(doc => ({id: doc.id , todo: doc.data().todo})))
})
}, []);

const addTodo = (event) => {
  //this will fire off when we click the button
  //event.preventDefault will stop refresh
event.preventDefault();
db.collection('todos').add({
  todo: input,
  timestamp: firebase.firestore.FieldValue.serverTimestamp()
})
setTodos([...todos, input]);
setInput('');

}
  return (
    
    <div className="App">
      <h1>TODO LIST 🚀</h1>


      <form>
      {/* <input value={input} onChange={event => setInput(event.target.value)}/> */}

  <FormControl>
  <InputLabel>Type Here</InputLabel>
  <Input value={input} onChange={event => setInput(event.target.value)} />
  </FormControl>
<Button disabled={!input} type="submit" onClick={addTodo} variant="contained" color="primary">
  Add Todo
</Button>
      <ul>
        {todos.map(todo => (
          <Todo todo={todo}/>
           // <li>{todo}</li>
        ))}
        </ul>
        </form>
    </div>
    
  );
}

export default App;
