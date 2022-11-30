import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { db } from '../firebase';

const KanbanContext = React.createContext()

function KanbanContextProvider({ children }) {
    const [batches, setBatches] = useState([
        {
            batchId: 4,
            test: "extraction",
            time: 10000
        },
        {
            batchId: 3,
            test: "extraction",
            time: 10000
        },
        {
            batchId: 2,
            test: "enrichment",
            time: 10000
        },
        {
            batchId: 1,
            test: "sequencing",
            time: 10000
        }
    ]);
    const [batchNumber, setBatchNumber] = useState(1);
    const [userLogin, setUserLogin] = useState(false);
    const batchCollectionRef = collection(db, "batch");

    const handleLogin = () => {
        setUserLogin(prevState => !prevState)
    }

    //FIREBASE: CREATE BATCH
    const createFirebaseBatch = async () => {
        const futureTime = Date.now() + 10000;

        await addDoc(batchCollectionRef, {
            batchId: batchNumber,
            test: "extraction",
            time: futureTime,
            isTimerActive: false
        })
        setBatchNumber(prevNumber => prevNumber + 1);
    }

    //FIREBASE: GET BATCHES
    useEffect(() => {
        const getBatches = async () => {
            const data = await getDocs(batchCollectionRef);
            setBatches(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
            
        }
        getBatches();
        
        
    }, [batchCollectionRef])

    //FIREBASE: UPDATE BATCH and DELETE BATCH
    const updateFirebaseBatch = async(batchToUpdate) => {
        //extraction > libraryPrep > lpCleanup > enrichment > quantitation > sequencing > remove
        const batchDoc = doc(db, "batch", batchToUpdate.id);
        const testToUpdate = batchToUpdate.test;
        let updatedTest = null;
        const futureTime = Date.now() + 10000;

        switch (testToUpdate) {
            case 'extraction':
                updatedTest = { test: 'libraryPrep', time: futureTime };
                break;
            case 'libraryPrep':
                updatedTest = { test: 'lpCleanup', time: futureTime };
                break;
            case 'lpCleanup':
                updatedTest = { test: 'enrichment', time: futureTime };
                break;
            case 'enrichment':
                updatedTest = { test: 'quantitation', time: futureTime };
                break;
            case 'quantitation':
                updatedTest = { test: 'sequencing', time: futureTime };
                break;
            default: //delete batch
                await deleteDoc(batchDoc);
                
        }
        await updateDoc(batchDoc, updatedTest);
    }


    return (
        <KanbanContext.Provider
            value={{
                batches,
                batchNumber,
                userLogin,
                handleLogin,
                createFirebaseBatch,
                updateFirebaseBatch
            }}
        >
            {children}
        </KanbanContext.Provider>
    )
}

export { KanbanContextProvider, KanbanContext }