import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/navbar.component";
import Authentication from "./route/authentication/authentication.component";
import Kanban from "./route/kanban/kanban.component";
// import { readData } from '../src/utils/firebase/firebase';

function App() {
  // useEffect(() => {
  //   readData()
  // }, [])

  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Kanban />} />
          <Route path="auth" element={<Authentication />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
