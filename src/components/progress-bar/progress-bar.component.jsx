import React from 'react'

function ProgressBar({timeLeft}) {
    let progress = null;
    // If status is Ready, display className="progress-bar bg-success" (green bar)

    // Else:
    if (timeLeft === 0){
        progress = (<div className="progress-bar bg-danger"
        role="progressbar"
        aria-label="Batch progress bar"
        style={{ width: '100%' }}
        aria-valuenow={timeLeft}
        aria-valuemin="0"
        aria-valuemax="100"></div>)
    } else if (timeLeft === 100){
        progress = (<div className="progress-bar bg-success"
            role="progressbar"
            aria-label="Batch progress bar"
            style={{ width: '100%' }}
            aria-valuenow={timeLeft}
            aria-valuemin="0"
            aria-valuemax="100"></div>)
    } else {
        progress = (<div className="progress-bar"
            role="progressbar"
            aria-label="Batch progress bar"
            style={{ width: `${timeLeft}%` }}
            aria-valuenow={timeLeft}
            aria-valuemin="0"
            aria-valuemax="100"></div>)
    }
  return (
    <>
     {progress}
    </>
  )
}

export default ProgressBar