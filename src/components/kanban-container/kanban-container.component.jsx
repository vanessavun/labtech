import React from 'react';
import DataCard from '../data-card/data-card.component';
import { createData } from '../../lab-data';

import './kanban-container.styles.css';

function KanbanContainer() {
    return (
        <div className='kanban-container container-fluid'>
            <div className='kanban-list d-flex justify-content-center mb-3'>
                <div className='kanban-column'>
                    <h5>Extraction</h5>
                    <DataCard labdata={createData(2)} />
                </div>
                <div className='kanban-column'>
                    <h5>Library Prep</h5>
                    <DataCard labdata={createData(5)} />
                </div>
                <div className='kanban-column'>
                    <h5>LP Cleanup</h5>
                    <DataCard labdata={createData(3)} />
                </div>
                <div className='kanban-column'>
                    <h5>Enrichment</h5>
                    <DataCard labdata={createData(4)} />
                </div>
                <div className='kanban-column'>
                    <h5>Quantitation</h5>
                    <DataCard labdata={createData(1)} />
                </div>
                <div className='kanban-column'>
                    <h5>Sequencing</h5>
                    <DataCard labdata={createData(6)} />
                </div>
            </div>
        </div>
    )
}

export default KanbanContainer;