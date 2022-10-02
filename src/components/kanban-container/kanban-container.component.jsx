import React, { useState } from 'react';
import DataCard from '../data-card/data-card.component';
import { createData, createDataSet } from '../../lab-data';

import './kanban-container.styles.css';

function KanbanContainer() {
    const [newBatch, setNewBatch] = useState({});
    const [batchNumber, setBatchNumber] = useState(0);
    const [extractionBatches, setExtractionBatches] = useState([]);

    const handleAddBatch = () => {
        setNewBatch(createData());
        setExtractionBatches(prevBatches => prevBatches.concat([newBatch]));
        console.log("newBatch: ", newBatch);
        console.log("batchNumber: ", batchNumber);
        console.log("extractions: ", extractionBatches);
    }
    
    return (
        <div className='kanban-board'>
            {/* Add batch to Extraction task */}
            <div className='d-flex justify-content-center m-2'>
                <button className="btn btn-primary" type="button" onClick={handleAddBatch}>Add new extraction batch</button>
            </div>
            {/* Kanban board tasks for 6 tests */}
            <div className='kanban-list container-lg text-center overflow-hidden'>
                <div className='row row-cols-3 g-2'>
                    <div className='kanban-column col-lg-2'>
                        <h5>Extraction</h5>
                        <DataCard labdata={extractionBatches} />
                    </div>
                    <div className='kanban-column col-lg-2'>
                        <h5>Library Prep</h5>
                        <DataCard labdata={createDataSet(5)} />
                    </div>
                    <div className='kanban-column col-lg-2'>
                        <h5>LP Cleanup</h5>
                        <DataCard labdata={createDataSet(3)} />
                    </div>
                    <div className='kanban-column col-lg-2'>
                        <h5>Enrichment</h5>
                        <DataCard labdata={createDataSet(4)} />
                    </div>
                    <div className='kanban-column col-lg-2'>
                        <h5>Quantitation</h5>
                        <DataCard labdata={createDataSet(1)} />
                    </div>
                    <div className='kanban-column col-lg-2'>
                        <h5>Sequencing</h5>
                        <DataCard labdata={createDataSet(6)} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default KanbanContainer;