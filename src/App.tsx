import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/templates/Nav";
import Main from "./pages/Main";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
