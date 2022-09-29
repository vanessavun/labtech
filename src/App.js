import React from 'react';
import './App.css';

import KanbanContainer from './components/kanban-container/kanban-container.component';
import Navbar from './components/navbar/navbar.component';

function App() {
  return (
    <div>
      <Navbar />
      <h2 className='text-center p-2 m-2'>Sample Batch Kanban Board</h2>
      <div className='d-flex justify-content-center m-2'>
        <button className="btn btn-primary" type="submit">Add batch</button>
      </div>
      <KanbanContainer />
    </div>
  );
}

export default App;
