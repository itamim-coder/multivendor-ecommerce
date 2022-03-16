import React from "react";
import { TheLayout } from "./views/pages/TheLayout";
import { useState } from "react";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <TheLayout></TheLayout>
    </BrowserRouter>
  );
}

export default App;
