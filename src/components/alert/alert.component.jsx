import React from "react";

function Alert() {
  return (
    <div className="d-flex d-flex justify-content-center align-items-center">
      <div className="alert alert-success w-75">
        <div className="toast-body">
          This kanban board serves as a collective space for laboratory timers to keep track of testing. "Add new extraction batch" is to add a new
          batch to the first testing column under "Extraction". After the timer is done, the lab tech may proceed to the next testing column by clicking on the drop down menu and clicking on "Proceed next step".
        </div>
      </div>
    </div>
  );
}

export default Alert;
