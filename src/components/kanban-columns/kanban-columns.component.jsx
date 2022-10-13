import React, {useContext} from 'react';
import DataCard from '../data-card/data-card.component';
import { KanbanContext } from '../../context/KanbanContext';

function KanbanColumns() {
    const {batches} = useContext(KanbanContext)
    const testColumn = (testType) => {
        return batches.filter(batch => (
            batch.test === testType
        ));
    }
    
    const testColumns = [
        {title: 'Extraction',
        batchList: testColumn("extraction")},
        {title: 'Library Prep',
        batchList: testColumn("libraryPrep")},
        {title: 'LP Cleanup',
        batchList: testColumn("lpCleanup")},
        {title: 'Enrichment',
        batchList: testColumn("enrichment")},
        {title: 'Quantitation',
        batchList: testColumn("quantitation")},
        {title: 'Sequencing',
        batchList: testColumn("sequencing")},
    ]
        
    return (
        <div className='kanban-list container-lg text-center overflow-hidden'>
            <div className='row row-cols-3 g-2'>
                {testColumns.map(column => (
                    <div className='kanban-column col-md-2'>
                        <h5>{column.title}</h5>
                    {/* DATACARD TO RECEIVE INDIVIDUAL BATCH Object */}
                    <DataCard labdata={column.batchList} />
                </div>
                ))}
            </div>
        </div>
    )
}

export default KanbanColumns