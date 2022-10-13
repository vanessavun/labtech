import React, {useState} from 'react'

const KanbanContext = React.createContext()

function KanbanContextProvider({children}) {
    const [batches, setBatches] = useState([]);
    const [batchNumber, setBatchNumber] = useState(1);

    const createExtractionBatch = (batchNum) => {
        return {
            batchId: batchNum,
            status: "Ready",
            test: "extraction",
            time: 10000,
            timeLeft: 100,
        }
    }

    const addBatch = () => {
        setBatches(prevBatches => prevBatches.concat([createExtractionBatch(batchNumber)]));
        setBatchNumber(prevNumber => prevNumber + 1);
    }

    const moveToNextTest = (batchToUpdate) => {
        //extraction > libraryPrep > lpCleanup > enrichment > quantitation > sequencing > remove
        const testToUpdate = batchToUpdate.test;
        let updatedTest = null;
        let batchUpdated = batches;

        switch(testToUpdate){
            case 'extraction':
                updatedTest = 'libraryPrep';
                break;
            case 'libraryPrep':
                updatedTest = 'lpCleanup';
                break;
            case 'lpCleanup':
                updatedTest = 'enrichment';
                break;
            case 'enrichment':
                updatedTest = 'quantitation';
                break;
            case 'quantitation':
                updatedTest = 'sequencing';
                break;
            default:
                updatedTest = null;
        }
        if (updatedTest === null) {
            batchUpdated = batches.filter(batch => batch.batchId !== batchToUpdate.batchId);
        } else {
            batchUpdated = batches.map(batch => {
                if(batch.batchId === batchToUpdate.batchId){
                    return {...batch, test: updatedTest}
                }
                return batch;
            });
        }
        setBatches(batchUpdated)
    }

    return (
        <KanbanContext.Provider value={{
            batches, 
            batchNumber,
            addBatch,
            moveToNextTest}}
        >
            {children}
        </KanbanContext.Provider>
    )
}

export {KanbanContextProvider, KanbanContext}