// DataSet is an array of batches as objects:
// [{batchId: number, status: string, timeLeft: number}, {}, {}...]
export const createDataSet = (length) => {
    let newData = [];
    let statusUpdate = null;
    for(let i = 1; i <= length; i++){
        let progressNum = Math.floor(Math.random()*101)
        // console.log(progressNum)
        if(progressNum === 100){
            statusUpdate = 'Complete';
        } else if (progressNum === 0) {
            statusUpdate = 'Failed';
        } else {
            statusUpdate = 'Running';
        }
        newData.push({
            batchID: i,
            status: statusUpdate,
            timeLeft: progressNum
        })
    }
    return newData;
}

//Data is an object for one batch
//{batchId: number, status: string, timeLeft: number}
export const createData = (IDnumber) => {
    // let statusUpdate = null;
    // let progressNum = Math.floor(Math.random()*101)
    // if(progressNum === 100){
    //     statusUpdate = 'Complete';
    // } else if (progressNum === 0) {
    //     statusUpdate = 'Failed';
    // } else {
    //     statusUpdate = 'Running';
    // }
    
    return ({
        batchID: IDnumber,
        status: 'Ready',
        timeLeft: 100
    })
}
