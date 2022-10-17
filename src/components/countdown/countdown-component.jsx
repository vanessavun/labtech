import React from 'react'
import { useCountdown } from '../../hooks/useCountdown'
import CompleteNotice from './countdown-complete.component';
import ShowCounter from './countdown-showcounter.component';

function Countdown({ data }) {
  const [days, hours, minutes, seconds] = useCountdown(data.time, data);

  if (days + hours + minutes + seconds <= 0) {
    return <CompleteNotice />;
  } else if (data.isTimerActive === true) {
      return (
        <ShowCounter
          days={days}
          hours={hours}
          minutes={minutes}
          seconds={seconds}
        />
      )
  } else {
    return (<p>No timer</p>
    )
  }
}

export default Countdown