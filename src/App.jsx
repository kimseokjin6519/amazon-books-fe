import { useState } from 'react'
import './App.css'
import bookData from './firebase-import.json';

function App() {
   
   return (
      <div>
         <div>{bookData.title}</div>
         <div>By {bookData.author}</div>
         <div>Published by {bookData.publisher}</div>
         <div>
            <strong>Rating:</strong> {bookData.rating}
         </div>
         <div>{bookData.description}</div>
         <div>
            image
         </div>
      </div>
   )
}

export default App
