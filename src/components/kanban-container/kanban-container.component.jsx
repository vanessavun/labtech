import React from 'react';
import DataCard from '../data-card/data-card.component';

import './kanban-container.styles.css';

function KanbanContainer() {
    return (
        <div className='kanban-container'>
            <div className='kanban-list d-flex justify-content-center'>
                <div className='kanban-column'>
                    <h4>Extraction</h4>
                    <DataCard />
                </div>
                <div className='kanban-column'>
                    <h4>Library Prep</h4>
                    <DataCard />
                </div>
                <div className='kanban-column'>
                    <h4>LP Cleanup</h4>
                    <DataCard />
                </div>
                <div className='kanban-column'>
                    <h4>Enrichment</h4>
                    <DataCard />
                </div>
                <div className='kanban-column'>
                    <h4>Quantitation</h4>
                    <DataCard />
                </div>
                <div className='kanban-column'>
                    <h4>Sequencing</h4>
                    <DataCard />
                </div>
            </div>
        </div>
    )
}

export default KanbanContainer;