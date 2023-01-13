import React from 'react';
import KanbanContainer from '../../components/kanban-container/kanban-container.component';
import KanbanBoardTitle from '../../components/kanban-board-title/kanban-board.component';

function Kanban() {

  return (
    <>
        <KanbanBoardTitle />
        <KanbanContainer />
    </>
  );
}

export default Kanban;
