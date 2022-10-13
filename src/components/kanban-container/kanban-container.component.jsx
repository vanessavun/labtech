import React, { useContext } from 'react';

import './kanban-container.styles.css';
import KanbanColumns from '../kanban-columns/kanban-columns.component';
import KanbanHeader from '../kanban-header/kanban-header.component';

import { KanbanContext } from '../../context/KanbanContext';

function KanbanContainer() {
    // USING KANBANCONTEXT
    const {batches, batchNumber} = useContext(KanbanContext)
    console.log("batches: ", batches)
    console.log("batchNum: ", batchNumber)

    return (
        <div className='kanban-board'>
            <KanbanHeader />
            <KanbanColumns />
        </div>
    )
}

export default KanbanContainer;