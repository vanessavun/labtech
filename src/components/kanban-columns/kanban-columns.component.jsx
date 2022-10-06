import React from 'react';
import DataCard from '../data-card/data-card.component';

function KanbanColumns({ 
    extractionBatches, 
    libraryPrepBatches, 
    lpCleanupBatches, 
    enrichmentBatches, 
    quantitationBatches, 
    sequencingBatches }) {
    
    const testColumns = [
        {title: 'Extraction',
        batchList: extractionBatches},
        {title: 'Library Prep',
        batchList: libraryPrepBatches},
        {title: 'LP Cleanup',
        batchList: lpCleanupBatches},
        {title: 'Enrichment',
        batchList: enrichmentBatches},
        {title: 'Quantitation',
        batchList: quantitationBatches},
        {title: 'Sequencing',
        batchList: sequencingBatches},
    ]
        

    return (
        <div className='kanban-list container-lg text-center overflow-hidden'>
            <div className='row row-cols-3 g-2'>
                {testColumns.map(column => (
                    <div className='kanban-column col-md-2'>
                        <h5>{column.test}</h5>
                    <DataCard labdata={column.batchList} />
                </div>
                ))}
            </div>
        </div>
    )
}

export default KanbanColumns