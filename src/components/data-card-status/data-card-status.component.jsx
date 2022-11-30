import React, { useState, useEffect } from 'react'
import Progress from '../progress-bar/progress-bar.component';
import Countdown from 'react-countdown';

function DataCardStatus({ data }) {
    const [timeLeft, setTimeLeft] = useState(0);
    const [status, setStatus] = useState("Ready")
    const CompleteNotice = () => <span>Completed</span>

    useEffect(() => {
      const interval = setInterval(() => {
        setTimeLeft(prevTime => prevTime + 10)
        statusUpdate()
      }, 1000)
    
      return () => clearInterval(interval)
    }, [timeLeft])
    
    const statusUpdate = () => {
        if(timeLeft === 0) {
            setStatus("Ready")
        } else if(timeLeft > 0 && timeLeft < 100) {
            setStatus("Running")
        } else {
            setStatus("Completed")
        }
    }

    return (
        <>
            <div className='card-body'>
                <div className='countdown-container container'>
                <p className="card-subtitle mb-2 text-muted">Status: <i>{status}</i></p>
                    <Progress
                        timeLeft={timeLeft}
                    />
                    <span className='d-inline-flex position-absolute bottom-0 translate-middle'>
                        <Countdown 
                            date={data.time} 
                            autoStart={true}
                        >
                            <CompleteNotice />
                        </Countdown>
                    </span>
                </div>
            </div>
        </>
    )
}

export default DataCardStatus