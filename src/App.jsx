import { useState, useEffect } from 'react'
import './App.css'
import { db, collection, getDocs } from "./firebase";
import BookView from "./BookView.jsx";

function App() {
   return (
      <div className="flex flex-col items-center">
         <BookView />
      </div>
   )
}

export default App
