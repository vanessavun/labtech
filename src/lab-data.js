
/*
lab data set = [
    {
        batchID: 1, 
        status: "Running", 
    },
]
*/

export const createData = (length) => {
    let newData = [];
    let statusUpdate = 'Running';
    for(let i = 1; i <= length; i++){
        let progressNum = Math.floor(Math.random()*101)
        if(progressNum === 100){
            statusUpdate = 'Complete';
        } else if (progressNum === 0) {
            statusUpdate = 'Failed';
        }
        newData.push({
            batchID: i,
            status: statusUpdate,
            timeLeft: progressNum
        })
    }
    return newData;
}

const LAB_DATA = createData(8);

export default LAB_DATA;