import React from 'react';
import KanbanContainer from './components/kanban-container/kanban-container.component';
import Navbar from './components/navbar/navbar.component';
import KanbanBoardTitle from './components/kanban-board-title/kanban-board.component';
import { KanbanContextProvider } from './context/KanbanContext';

function App() {

  return (
    <>
      <KanbanContextProvider>
        <Navbar />
        <KanbanBoardTitle />
        <KanbanContainer />
      </KanbanContextProvider>
    </>
  );
}

export default App;
