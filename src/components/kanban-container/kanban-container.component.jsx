import React from 'react';
import DataCard from '../data-card/data-card.component';
import { createData } from '../../lab-data';

import './kanban-container.styles.css';

function KanbanContainer() {
    return (
        <div className='kanban-container container-fluid'>
            <div className='kanban-list d-flex justify-content-center mb-3'>
                <div className='kanban-column'>
                    <h4>Extraction</h4>
                    <DataCard labdata={createData(2)} />
                </div>
                <div className='kanban-column'>
                    <h4>Library Prep</h4>
                    <DataCard labdata={createData(5)} />
                </div>
                <div className='kanban-column'>
                    <h4>LP Cleanup</h4>
                    <DataCard labdata={createData(3)} />
                </div>
                <div className='kanban-column'>
                    <h4>Enrichment</h4>
                    <DataCard labdata={createData(4)} />
                </div>
                <div className='kanban-column'>
                    <h4>Quantitation</h4>
                    <DataCard labdata={createData(1)} />
                </div>
                <div className='kanban-column'>
                    <h4>Sequencing</h4>
                    <DataCard labdata={createData(6)} />
                </div>
            </div>
        </div>
    )
}

export default KanbanContainer;