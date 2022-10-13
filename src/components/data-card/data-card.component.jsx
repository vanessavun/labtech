import React from 'react';
import ProgressBar from '../progress-bar/progress-bar.component';
import Countdown from 'react-countdown';
import DataCardDropdown from '../data-card-dropdown/data-card-dropdown.component'

import './data-card.styles.css'

function DataCard({ labdata }) {

  return (
    <div>
      {/* If there is data */}
      {labdata.length > 0 
        ? (labdata.map(data => (
          <div key={data.batchId} className='card mb-2'>
            {/* Card header: batch ID number and dropdown menu */}
            <div className="card-header">
              <div className="btn-group float-end" role="group">
                {/* Drop down menu buttons to move batch */}
                <DataCardDropdown data={data} />
              </div>
              <p className='card-title'>Batch ID: {data.batchId}</p>
            </div>
            {/* Card body: progress bar and countdown */}
            <div className='card-body'>
              <p className="card-subtitle mb-2 text-muted">Status: <i>{data.status}</i></p>
              <div className='countdown-container container'>
                <span className='position-absolute bottom-0 start-40 translate-middle text-dark'>
                  <Countdown 
                    date={Date.now() + data.time} 
                    autoStart={false}
                   />
                </span>
                <div className="progress">
                  <ProgressBar timeLeft={data.timeLeft} />
                </div>
              </div>
            </div>
          </div>
          )))
        // If there is no data, show no pending batches message
        : (<div className='alert alert-primary' role='alert'>
            <span>No pending batches</span>
          </div>)
      }
    </div>
  )
}

export default DataCard