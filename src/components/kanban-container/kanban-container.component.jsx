import React, { useEffect, useState } from 'react';
import { createData } from '../../lab-data';

import './kanban-container.styles.css';
import KanbanColumns from '../kanban-columns/kanban-columns.component';
import KanbanHeader from '../kanban-header/kanban-header.component';

function KanbanContainer() {
    const [newBatch, setNewBatch] = useState({});
    const [batchNumber, setBatchNumber] = useState(1);
    const [extractionBatches, setExtractionBatches] = useState([]);
    const [libraryPrepBatches] = useState([]);
    const [lpCleanupBatches] = useState([]);
    const [enrichmentBatches] = useState([]);
    const [quantitationBatches] = useState([]);
    const [sequencingBatches] = useState([]);

    useEffect(() => {
        setNewBatch(createData(batchNumber));
    }, [])

    const handleAddBatch = () => {
        setBatchNumber(prevNumber => prevNumber + 1);
        setNewBatch(createData(batchNumber + 1))
        setExtractionBatches(prevBatches => prevBatches.concat([newBatch]));
    }

    return (
        <div className='kanban-board'>
            <KanbanHeader batchNumber={batchNumber} handleAddBatch={handleAddBatch} />
            <KanbanColumns
                extractionBatches={extractionBatches}
                libraryPrepBatches={libraryPrepBatches}
                lpCleanupBatches={lpCleanupBatches}
                enrichmentBatches={enrichmentBatches}
                quantitationBatches={quantitationBatches}
                sequencingBatches={sequencingBatches}
            />
        </div>
    )
}

export default KanbanContainer;