
/*
lab data set = [
    {
        batchID: 1, 
        status: "Running", 
    },
]
*/

function createData (length) {
    let newData = [];
    for(let i = 1; i <= length; i++){
        let progressNum = Math.floor(Math.random()*100)
        newData.push({
            batchID: i,
            status: "Running",
            timeLeft: progressNum
        })
    }
    return newData;
}

const LAB_DATA = createData(8);

export default LAB_DATA;