import React from 'react';
import ProgressBar from '../progress-bar/progress-bar.component';
import Countdown from 'react-countdown';
import './data-card.styles.css'

function DataCard({ labdata }) {

  return (
    <div>
      {/* If there is data */}
      {labdata.length > 0 
        ? (labdata.map(data => (
          <div key={data.batchID} className='card mb-2'>
            {/* Card header: batch ID number and dropdown menu */}
            <div className="card-header">
              <div className="btn-group float-end" role="group">
                <button type="button" className="btn btn-secondary dropdown-toggle btn-sm" data-bs-toggle="dropdown" aria-expanded="false" >
                </button>
                <ul className="dropdown-menu">
                  {/* Drop down menu buttons to move batch */}
                  <li>
                    <button 
                      className="dropdown-item" 
                      onClick={()=>console.log("START")}>
                      Start run
                    </button>
                  </li>
                  <li>
                    <button 
                      className="dropdown-item" 
                      onClick={()=>console.log("PROCEED")}>
                      Proceed next step
                    </button>
                  </li>
                  {/* Future functions:
                   <li><hr className='dropdown-divider' /></li>
                  <li><button className="dropdown-item" onClick={()=>console.log("FAIL")}>Fail run</button></li>
                  <li><button className="dropdown-item" onClick={()=>console.log("RERUN")}>Rerun batch</button></li>
                  <li><button className="dropdown-item" onClick={()=>console.log("RE-EXTRACT")}>Re-extract</button></li>
                  <li><hr className='dropdown-divider' /></li>
                  <li><button className="dropdown-item" onClick={()=>console.log("BATCH INFO")}>Batch information</button></li> 
                  */}
                </ul>
              </div>
              <p className='card-title'>Batch ID: {data.batchID}</p>
            </div>
            {/* Card body: progress bar and countdown */}
            <div className='card-body'>
              <p className="card-subtitle mb-2 text-muted">Status: <i>{data.status}</i></p>
              <div className='countdown-container container'>
                <span className='position-absolute bottom-0 start-40 translate-middle text-dark'>
                  <Countdown 
                    date={Date.now() + 100000} 
                    autoStart={false} />
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