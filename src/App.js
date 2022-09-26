import React from 'react';
import './App.css';

import KanbanContainer from './components/kanban-container/kanban-container.component';
import Navbar from './components/navbar/navbar.component';

function App() {
  return (
    <div>
      <Navbar />
      <h1 className='text-center'>Sample Batch Kanban Board</h1>
      <KanbanContainer />
    </div>
  );
}

export default App;
