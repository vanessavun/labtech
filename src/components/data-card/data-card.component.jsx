import React from 'react';
import ProgressBar from '../progress-bar/progress-bar.component';
import Countdown from 'react-countdown';
import './data-card.styles.css'

function DataCard({ labdata }) {

  return (
    <div>
      {/* If there is data */}
      {labdata.length > 0 ? (labdata.map(data => (
        <div key={data.batchID} className='card mb-2'>
          <div className="card-header">
            <div className="btn-group float-end" role="group">
              <button type="button" className="btn btn-secondary dropdown-toggle btn-sm" data-bs-toggle="dropdown" aria-expanded="false" >
              </button>
              <ul className="dropdown-menu"> {/* // eslint-disable-next-line */}
                <li><a className="dropdown-item" href="http://localhost:3000/">Start run</a></li>
                <li><a className="dropdown-item" href="http://localhost:3000/">Proceed next step</a></li>
                <li><hr className='dropdown-divider' /></li>
                <li><a className="dropdown-item" href="http://localhost:3000/">Fail run</a></li>
                <li><a className="dropdown-item" href="http://localhost:3000/">Rerun batch</a></li>
                <li><a className="dropdown-item" href="http://localhost:3000/">Re-extract</a></li>
                <li><hr className='dropdown-divider' /></li>
                <li><a className="dropdown-item" href="http://localhost:3000/">Batch information</a></li>
              </ul>
            </div>
            <p className='card-title'>Batch ID: {data.batchID}</p>
          </div>
          <div className='card-body'>
            <p className="card-subtitle mb-2 text-muted">Status: <i>{data.status}</i></p>
            <div className='countdown-container container'>
              <span className='position-absolute bottom-0 start-40 translate-middle text-dark'><Countdown date={Date.now() + 100000} /></span>
              <div className="progress">
                <ProgressBar timeLeft={data.timeLeft} />
              </div>
            </div>
          </div>
        </div>
      )))
        // If there is no data
        : (<div className='alert alert-primary' role='alert'>
            <span>No pending batches</span>
          </div>)
      }
    </div>
  )
}

export default DataCard