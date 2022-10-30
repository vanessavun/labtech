import React from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar'

function Progress({timeLeft}) {
    let progress = 0;

    if (timeLeft >= 100) {
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