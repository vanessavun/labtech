import React from 'react';
import ProgressBar from '../progress-bar/progress-bar.component';

function DataCard({ labdata }) {

  return (
    <div>
      {labdata.map(data => (
        <div key={data.batchID} className='card'>
          <div className='card-body'>
              <div className="btn-group" role="group">
                <button type="button" className="btn btn-secondary dropdown-toggle btn-sm" data-bs-toggle="dropdown" aria-expanded="false">
                </button>
                <ul className="dropdown-menu"> {/* // eslint-disable-next-line */}
                  <li><a className="dropdown-item" href="http://localhost:3000/">Start run</a></li>
                  <li><a className="dropdown-item" href="http://localhost:3000/">Fail run</a></li>
                  <li><a className="dropdown-item" href="http://localhost:3000/">Rerun batch</a></li>
                  <li><a className="dropdown-item" href="http://localhost:3000/">Re-extract</a></li>
                  <li><a className="dropdown-item" href="http://localhost:3000/">Batch information</a></li> 
                </ul>
              </div>
            <h5 className='card-title'>Batch ID: {data.batchID}</h5>
            <p className="card-subtitle mb-2 text-muted">Status: {data.status}</p>
            <div className="progress">
              <ProgressBar timeLeft={data.timeLeft} />              
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default DataCard