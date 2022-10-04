import React, { useEffect, useState } from 'react';
import DataCard from '../data-card/data-card.component';
import { createData, createDataSet } from '../../lab-data';

import './kanban-container.styles.css';

function KanbanContainer() {
    const [newBatch, setNewBatch] = useState({});
    const [batchNumber, setBatchNumber] = useState(1);
    const [extractionBatches, setExtractionBatches] = useState([]);
    const [libraryPrepBatches, setLibraryPrepBatches] = useState(createDataSet(2));
    const [lpCleanupBatches, setlpCleanupBatches] = useState(createDataSet(4));
    const [enrichmentBatches, setEnrichmentBatches] = useState(createDataSet(1));
    const [quantitationBatches, setQuantitationBatches] = useState([]);
    const [sequencingBatches, setSequencingBatches] = useState(createDataSet(5));

    useEffect(() => {
        setNewBatch(createData(batchNumber));
        console.log('UseEffect batchNumber: ', batchNumber)
        if (batchNumber > 5) {
            console.log('batch num is ===', batchNumber)
        } else {
            console.log('batch num is +++', batchNumber)
        }
    }, [])

    const handleAddBatch = () => {
        setBatchNumber(prevNumber => prevNumber + 1);
        setNewBatch(createData(batchNumber + 1))
        console.log("batchNumber: ", batchNumber);
        setExtractionBatches(prevBatches => prevBatches.concat([newBatch]));
        console.log("newBatch: ", newBatch);
        console.log("extractions: ", extractionBatches);
    }

    return (
        <div className='kanban-board'>
            {/* Add batch to Extraction task plus future task: make component */}
            <div className='d-flex justify-content-around m-2'>
                <button className="btn btn-primary" type="button" onClick={() => handleAddBatch()}>Add new extraction batch: {batchNumber}</button>
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
            {/* Kanban board tasks for 6 tests */}
            <div className='kanban-list container-lg text-center overflow-hidden'>
                <div className='row row-cols-3 g-2'>
                    <div className='kanban-column col-md-2'>
                        <h5>Extraction</h5>
                        <DataCard labdata={extractionBatches} />
                    </div>
                    <div className='kanban-column col-md-2'>
                        <h5>Library Prep</h5>
                        <DataCard labdata={libraryPrepBatches} />
                    </div>
                    <div className='kanban-column col-md-2'>
                        <h5>LP Cleanup</h5>
                        <DataCard labdata={lpCleanupBatches} />
                    </div>
                    <div className='kanban-column col-md-2'>
                        <h5>Enrichment</h5>
                        <DataCard labdata={enrichmentBatches} />
                    </div>
                    <div className='kanban-column col-md-2'>
                        <h5>Quantitation</h5>
                        <DataCard labdata={quantitationBatches} />
                    </div>
                    <div className='kanban-column col-md-2'>
                        <h5>Sequencing</h5>
                        <DataCard labdata={sequencingBatches} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default KanbanContainer;