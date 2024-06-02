import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";


function App() {

  return (
    <>
      <Navbar />
      <div className="md: container mx-auto">
        <div className="bg-red-300">
          Hey, I am red
        </div>
      </div>
    </>
  );
}

export default App;
