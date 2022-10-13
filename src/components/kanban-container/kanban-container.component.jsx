import React from 'react';

import './kanban-container.styles.css';
import KanbanColumns from '../kanban-columns/kanban-columns.component';
import KanbanHeader from '../kanban-header/kanban-header.component';

function KanbanContainer() {

    return (
        <div className='kanban-board'>
            <KanbanHeader />
            <KanbanColumns />
        </div>
    )
}

export default KanbanContainer;