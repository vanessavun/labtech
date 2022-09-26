import React from 'react';
import LAB_DATA from '../../lab-data';

function DataCard() {
  return (
    <div>
      {LAB_DATA.map(data => (
        <div key={data.batchID} className='card'>
          <div className='card-body'>
            <h5 className='card-title'>Batch ID: {data.batchID}</h5>
            <p className="card-subtitle mb-2 text-muted">Status: {data.status}</p>
            <div className="progress">
              <div className="progress-bar"
                role="progressbar"
                aria-label="Batch progress bar"
                style={{ width: `${data.timeLeft}%` }}
                aria-valuenow={data.timeLeft}
                aria-valuemin="0"
                aria-valuemax="100"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default DataCard