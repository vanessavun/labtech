import React from 'react'
import Countdown from '../countdown/countdown-component';
import Progress from '../progress-bar/progress-bar.component';

function DataCardStatus({ data }) {
    const future = data.time;

    return (
        <>
            <div className='card-body'>
                <p className="card-subtitle mb-2 text-muted">Status: <i>{data.status}</i></p>
                <div className='countdown-container container'>
                    <Progress
                            timeLeft={data.timeLeft}
                    />
                    <span className='d-inline-flex position-absolute top-80 translate-middle'>
                        <Countdown targetTime={future} />
                    </span>
                </div>
            </div>
        </>
    )
}

export default DataCardStatus