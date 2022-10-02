import React from 'react';
import DataCard from '../data-card/data-card.component';
import { createDataSet } from '../../lab-data';

function KanbanColumns() {
  return (
    <div className='kanban-list d-flex justify-content-center mb-3'>
        <div className='kanban-column'>
            <h5>Extraction</h5>
            <DataCard labdata={createDataSet(5)} />
        </div>
        <div className='kanban-column'>
            <h5>Library Prep</h5>
            <DataCard labdata={createDataSet(5)} />
        </div>
        <div className='kanban-column'>
            <h5>LP Cleanup</h5>
            <DataCard labdata={createDataSet(3)} />
        </div>
        <div className='kanban-column'>
            <h5>Enrichment</h5>
            <DataCard labdata={createDataSet(4)} />
        </div>
        <div className='kanban-column'>
            <h5>Quantitation</h5>
            <DataCard labdata={createDataSet(1)} />
        </div>
        <div className='kanban-column'>
            <h5>Sequencing</h5>
            <DataCard labdata={createDataSet(6)} />
        </div>
    </div>
  )
}

export default KanbanColumns