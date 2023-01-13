import React from "react";
import Progress from "../progress-bar/progress-bar.component";
import { Button } from "react-bootstrap";
import { useCountdownTimer } from "use-countdown-timer";
import "./data-card-status.styles.css";

function DataCardStatus({ data }) {
  // const [timerChange, setTimerChange] = useState(false);
  const { countdown, start, reset, pause, isRunning } = useCountdownTimer({
    timer: 1000 * 5,
    expireImmediate: false,
  });

  const handleTimeClick = () => {
    // setTimerChange(true);
    alert("Feature in progress");
  };

  return (
    <>
      <div className="card-body">
        <div className="countdown-container container">
          <Progress countdown={countdown} isRunning={isRunning} />

          <span className="d-inline-flex position-absolute top-50 start-50 translate-middle fw-bold">
            {countdown / 1000}s
          </span>

          <div className="d-flex pt-2 justify-content-center">
            <Button
              className="buttons btn btn-secondary m-1"
              size="sm"
              onClick={reset}
            >
              Reset
            </Button>

            {isRunning ? (
              <Button
                className="buttons btn btn-secondary m-1"
                size="sm"
                onClick={pause}
              >
                Pause
              </Button>
            ) : (
              <Button
                className="buttons btn btn-warning m-1"
                size="sm"
                onClick={start}
              >
                Start
              </Button>
            )}

            <Button
              className="buttons btn m-1"
              size="sm"
              onClick={handleTimeClick}
            >
              Time
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default DataCardStatus;
