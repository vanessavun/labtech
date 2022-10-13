import React from 'react'
import DateTimeDisplay from './countdown-datetimedisplay'

function ShowCounter({ days, hours, minutes, seconds}) {
  return (
    <>
        <DateTimeDisplay value={days} />:<DateTimeDisplay value={hours} />:<DateTimeDisplay value={minutes} />:<DateTimeDisplay value={seconds} />
    </>
  )
}

export default ShowCounter