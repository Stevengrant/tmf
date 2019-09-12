import React, { useState, useEffect } from 'react';
import './App.css';
let API = "http://taskmaster-dev.us-east-1.elasticbeanstalk.com/api/v1/";
function App() {
  const [tasks, setTasks] = useState([]);
  function getTasks() {
    fetch(API + "tasks")
      .then(data => data.json())
      .then(fetchedTasks => setTasks(fetchedTasks));
  }
  useEffect(getTasks, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>TaskMaster</h1>
        <ul>
          {tasks.map((task, idx) => {
            return (
              <li key={task.id}>
                {task.title}
                <details>
                  <History history={task.history} />
                </details>
              </li>
            )
          })}
        </ul>
      </header>
      History()
    </div>
  );
  function History(prop) {
    return (
      <ol>
        {prop.history.map((record, idx) => {
          return (
            <li key={idx}>
              <span>{record.timestamp}</span>
              <span>{record.action}</span>
            </li>
          )
        })}
      </ol>
    )
  }
}

export default App;
