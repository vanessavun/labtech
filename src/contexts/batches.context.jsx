import { createContext, useEffect, useState } from "react";

export const BatchContext = createContext({
    extractionBatches: [],
    libraryprepBatches: [],
    lpCleanUpBatches: [],
    enrichmentBatches: [],
    quantitationBatches: [],
    sequencingBatches: [],
    batchNumber: 0,
    newBatch: () => {},
});

export const BatchesProvider = ({children}) => {
    const [extractionBatches, setExtractionBatches] = useState([]);
    const [libraryprepBatches, setLibraryprepBatches] = useState([]);
    const [lpCleanUpBatches, setLpCleanUpBatches] = useState([]);
    const [enrichmentBatches, setEnrichmentBatches] = useState([]);
    const [quantitationBatches, setQuantitationBatches] = useState([]);
    const [sequencingBatches, setSequencingBatches] = useState([]);
    const [batchNumber, setBatchNumber] = useState(0);

    const newBatch = (batchNumber) => {
        let statusUpdate = null;
        let progressNum = Math.floor(Math.random()*101)
        if(progressNum === 100){
            statusUpdate = 'Complete';
        } else if (progressNum === 0) {
            statusUpdate = 'Failed';
        } else {
            statusUpdate = 'Running';
        }
        const batchNum = batchNumber;
        setBatchNumber(prevNum => prevNum + 1);
        return ({
            batchID: batchNum,
            status: statusUpdate,
            timeLeft: progressNum
        })
    }

    const value = {
        extractionBatches,
        libraryprepBatches,
        lpCleanUpBatches,
        enrichmentBatches,
        quantitationBatches,
        sequencingBatches,
    }

    return <BatchContext.Provider value={value}>{children}</BatchContext.Provider>
}