# LAB TECH

This project is built using React, JavaScript, HTML/CSS, Bootstrap. 

## The problem to solve

A biotech laboratory has been keeping track of their sample batch status using a whiteboard, taped-on cards for each sample batch, and excel spreadsheets. 

## The solution

The goal is to show a visual representation of batches running through the laboratory. The kanban board allows countdown timing of batches when they are running on the machine. When the batches are done, they will show up on the next test queue which will be ready to do the next step. The laboratory technologist will start the machine and also the batch in the kanban board.

## Documentation

### To install
```bash
yarn
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
  test: "extraction"
}
```

### Components within the data card

- Drop down menu, status, countdown timer, progress bar (visual representation)
- Progress bar uses the npm package: 'react-bootstrap/ProgressBar'
- The countdown timer uses the npm package: 'use-countdown-timer'
- The progress bar uses the timer above as visual representation

### Components within the kanban board
- title, container, header, columns
- Each test column filters the batches by testType
- Test types: Extraction, Library Prep, LP Cleanup, Enrichment, Quantitation, Sequencing

### Global state management
- KanbanContext.js contains the useContext React hook for global state management

### Backend implementation (11/2022)

- Firebase (noSQL) is being developed in the firebase branch, and CRUD is implemented for the batch creation (Create a batch, get batches, update batch and delete batch). However, because of the constant re-rendering of the page every time a batch is moved onto the next test column, it created over 50K reads.
- The re-rendering and re-reads of the database proves that optimization needs to be implement to prevent re-reads and re-rendering. Because it crashed my free-available space in Firebase, I am choosing not to launch the app with Firebase connected.

### Firebase authentication (12/2022-01/2023)
- Firebase added for user authentication.