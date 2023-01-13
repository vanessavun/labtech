import React, { useState, useEffect } from 'react'

const KanbanContext = React.createContext();


function KanbanContextProvider({children}) {
    let storedBatches = [];
    let currentStoredNumber = 1;

    if(localStorage.getItem('storedBatches')){
        storedBatches = JSON.parse(localStorage.storedBatches)
        if(storedBatches.length > 1) {
            currentStoredNumber = (storedBatches[storedBatches.length-1].batchId)+1;
        }
    }
    const [batches, setBatches] = useState(storedBatches);
    const [batchNumber, setBatchNumber] = useState(currentStoredNumber);
    const [currentUser, setCurrentUser] = useState("Guest");
    
    useEffect(() => {
    localStorage.setItem('storedBatches', JSON.stringify(batches))
    }, [batches])

    const createExtractionBatch = (batchNum) => {
        return {
            batchId: batchNum,
            test: "extraction"
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
        const futureTime = Date.now() + 10000;

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
                    return {...batch, test: updatedTest, time: futureTime}
                }
                return batch;
            });
        }
        setBatches(batchUpdated)
    }

    return (
        <KanbanContext.Provider 
            value={{
                batches, 
                batchNumber,
                addBatch,
                moveToNextTest,
                currentUser,
                setCurrentUser
                }}
        >
            {children}
        </KanbanContext.Provider>
    )
}

export {KanbanContextProvider, KanbanContext}