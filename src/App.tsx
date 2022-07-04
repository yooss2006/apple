import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/templates/Header";
import Nav from "./components/organisms/Nav";
import Main from "./pages/Main";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
