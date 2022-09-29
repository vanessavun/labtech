import React from 'react';

function DataCard({ labdata }) {

  return (
    <div>
      {labdata.map(data => (
        <div key={data.batchID} className='card'>
          <div className='card-body'>
              <div className="btn-group" role="group">
                <button type="button" class="btn btn-secondary dropdown-toggle btn-sm" data-bs-toggle="dropdown" aria-expanded="false">
                </button>
                <ul className="dropdown-menu"> {/* // eslint-disable-next-line */}
                  <li><a className="dropdown-item" href="#">Start run</a></li>{/*  // eslint-disable-next-line */}
                  <li><a className="dropdown-item" href="#">Fail run</a></li>{/*  // eslint-disable-next-line */}
                  <li><a className="dropdown-item" href="#">Rerun batch</a></li>{/*  // eslint-disable-next-line */}
                  <li><a className="dropdown-item" href="#">Re-extract</a></li>{/*  // eslint-disable-next-line */}
                  <li><a className="dropdown-item" href="#">Batch information</a></li> {/*  // eslint-disable-next-line */}
                </ul>
              </div>
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