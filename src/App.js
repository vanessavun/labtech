import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./route/navbar/navbar.component";
import Authentication from "./route/authentication/authentication.component";
import Kanban from "./route/kanban/kanban.component";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Kanban />} />
          <Route path="auth/*" element={<Authentication />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
