import React from 'react';
import './App.css';

import KanbanContainer from './components/kanban-container/kanban-container.component';
import Navbar from './components/navbar/navbar.component';
import KanbanBoardTitle from './components/kanban-board-title/kanban-board.component';
import { KanbanContextProvider } from './context/KanbanContext';

function App() {

  return (
    <>
      <Navbar />
      <KanbanBoardTitle />
      <KanbanContextProvider>
        <KanbanContainer />
      </KanbanContextProvider>
    </>
  );
}

export default App;
