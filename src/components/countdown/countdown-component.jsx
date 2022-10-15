import React from 'react'
import { useCountdown } from '../../hooks/useCountdown'
import CompleteNotice from './countdown-complete.component';
import ShowCounter from './countdown-showcounter.component';

function Countdown({ targetTime }) {
  const [days, hours, minutes, seconds] = useCountdown(targetTime);

  if (days + hours + minutes + seconds <= 0) {
    return <CompleteNotice />;
  } else {
    return (
      <ShowCounter
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
}

export default Countdown