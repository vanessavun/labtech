import React from 'react';
import './App.css';

import KanbanContainer from './components/kanban-container/kanban-container.component';
import Navbar from './components/navbar/navbar.component';

function App() {

  return (
    <div>
      <Navbar />
      <h2 className='text-center p-2 m-2'>Sample Batch Kanban Board</h2>
      <KanbanContainer />
    </div>
  );
}

export default App;
