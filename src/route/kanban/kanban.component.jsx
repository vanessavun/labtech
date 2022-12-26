import React from 'react';
import KanbanContainer from '../../components/kanban-container/kanban-container.component';
import KanbanBoardTitle from '../../components/kanban-board-title/kanban-board.component';
// import { readData } from '../src/utils/firebase/firebase';

function Kanban() {
  // useEffect(() => {
  //   readData()
  // }, [])

  return (
    <>
        <KanbanBoardTitle />
        <KanbanContainer />
    </>
  );
}

export default Kanban;
