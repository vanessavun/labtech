import React from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar'

function Progress({timeLeft}) {
    let progress = 0;

    if (timeLeft !== 100) {
      progress = <ProgressBar now={timeLeft} />
    } else {
      progress = <ProgressBar variant="success" now={100} />
    }

    return (
      <>
      {progress}
      </>
    )
}

export default Progress