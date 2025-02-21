import { useState, useEffect } from 'react'
import './App.css'
import { db, collection, getDocs } from "./firebase";

function App() {

   const [books, setBooks] = useState([]);

   const getAllBooks = async () => {
      try {
         const booksRef = collection(db, "books");
         const querySnapshot = await getDocs(booksRef);
         const booksData = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data()
         }));
         setBooks(booksData);
      } catch (e) {
         console.error("Error getting documents: ", e);
      }
   };

   useEffect(() => {
      getAllBooks();
   }, []);

   return (
      <div className="flex flex-col items-center">
      
         {books.map((book) => (
         
            <div key={book.id}>

               <div className="">{book.title}</div>
               
               <div>By {book.author}</div>
               
               <div>Published by {book.publisher}</div>
               
               <div>
                  <strong>Rating:</strong> {book.rating}
               </div>
               
               <div>{book.description}</div>
               
               <div><img className="w-[300px]" src={`data:image/png;base64,${book.imageBase64}`} alt="Book Image"/></div>

            </div>

         ))}

      </div>
   )
}

export default App
