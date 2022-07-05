import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import "./App.css";

import Header from "./components/templates/Header";
import Main from "./pages/Main";

const HeaderStyle = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
`;

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
