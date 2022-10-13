import React from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar'

function Progress({timeLeft}) {
    let progress = null;
    // If status is Ready, display className="progress-bar bg-success" (green bar)

    // Else:
    if (timeLeft === 0){
        progress = <ProgressBar variant="danger" now={100} />
    } else if (timeLeft === 100){
        progress = <ProgressBar variant="success" now={100} />
    } else {
        progress = <ProgressBar now={timeLeft} />
    }
  return (
    <>
     {progress}
    </>
  )
}

export default Progress