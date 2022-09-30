import React from 'react';
import './App.css';

import KanbanContainer from './components/kanban-container/kanban-container.component';
import Navbar from './components/navbar/navbar.component';

function App() {

  const handleAddBatch = () => {
    alert('Clicked');
  }

  return (
    <div>
      <Navbar />
      <h2 className='text-center p-2 m-2'>Sample Batch Kanban Board</h2>
      <div className='d-flex justify-content-center m-2'>
        <button className="btn btn-primary" type="button" onClick={handleAddBatch}>Add batch</button>
      </div>
      <KanbanContainer />
      <p className='text-center p-2 m-2'><a href="https://www.flaticon.com/free-icons/laboratory" title="laboratory icons">Laboratory icons created by Freepik - Flaticon</a></p>
    </div>
  );
}

export default App;
