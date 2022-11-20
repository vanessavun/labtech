# LAB TECH

This project is built using React, JavaScript, HTML/CSS, Bootstrap. 

## The problem to solve

A biotech laboratory has been keeping track of their sample batch status using a whiteboard, taped-on cards for each sample batch, and excel spreadsheets. 

## The solution

The goal is to show a visual representation of batches running through the laboratory. The kanban board allows countdown timing of batches when they are running on the machine. When the batches are done, they will show up on the next test queue which will be ready to do the next step. The laboratory technologist will start the machine and also the batch in the kanban board.

## Documentation

### To install
```bash
npm install
```

### Styling
- Bootstrap CSS

### Main Components

- Data card, kanban board, navbar
- Data card displays individual batch object
- Individual batch object:
```bash
{
  batchId: batchNum,
  test: "extraction",
  time: futureTime,
  isTimerActive: false
}
```

### Components within the data card

- Drop down menu, status, countdown timer, progress bar (visual representation)
- Progress bar uses the npm package: 'react-bootstrap/ProgressBar'
- The progress bar uses the useEffect React Hook to see a visual representation of the bar filling up
- The countdown timer uses the npm package: 'react-countdown'

### Components within the kanban board
- title, container, header, columns
- Each test column filters the batches by testType
- Test types: Extraction, Library Prep, LP Cleanup, Enrichment, Quantitation, Sequencing

### Global state management
- KanbanContext.js contains the useContext React hook for global state management

### Backend implementation

- Firebase (none SQL)
- To store patient batches as an array of objects