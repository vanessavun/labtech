import React from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar'

function Progress({timeLeft}) { //Date.now() + 10000
    let progress = 0;

    if (timeLeft >= 100) {
      progress = <ProgressBar variant="success" now={timeLeft} />
    } else {
      progress = <ProgressBar animated now={timeLeft} />
    }

    return (
      <>
      {progress}
      </>
    )
}

export default Progress