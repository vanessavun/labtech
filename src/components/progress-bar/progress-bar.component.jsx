import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";

function Progress({ countdown, isRunning }) {
  let now = 100-((countdown / 5000)*100);
  let progress;
  console.log(countdown, now);


  if (isRunning) {
    progress = <ProgressBar now={now} />;
  } else {
    progress = <ProgressBar now={0} />;
  }


  return <>{progress}</>;
}

export default Progress;
