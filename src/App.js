import React from 'react';
import KanbanContainer from './components/kanban-container/kanban-container.component';
import Navbar from './components/navbar/navbar.component';
import KanbanBoardTitle from './components/kanban-board-title/kanban-board.component';
import { KanbanContextProvider } from './context/KanbanContext';

import { doc, getFirestore } from 'firebase/firestore';
import { FirestoreProvider, useFirestoreDocData, useFirestore, useFirebaseApp } from 'reactfire';

function BurritoTaste() {
  const burritoRef = doc(useFirestore(), 'tryreactfire', 'burrito');

  const { status, data } = useFirestoreDocData(burritoRef);

  if (status === 'loading') {
    return <p>Fetching burrito flavor...</p>;
  }

  return <p>The burrito is {data.yummy ? 'good' : 'bad'}!</p>;
}

function App() {
  const firestoreInstance = getFirestore(useFirebaseApp());

  return (
    <>
      <FirestoreProvider sdk={firestoreInstance}>
        <KanbanContextProvider>
          <Navbar />
          <KanbanBoardTitle />
          <KanbanContainer />
        </KanbanContextProvider>
        <BurritoTaste />
      </FirestoreProvider>
    </>
  );
}

export default App;
