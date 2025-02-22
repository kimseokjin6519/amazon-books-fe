import { useState, useEffect } from 'react'
import './App.css'
import { db, collection, getDocs } from "./firebase";

function BookView() {
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
           
     <div className="flex w-[800px] items-center border-0 border-gray-600 rounded">
         {books.map((book) => (
            <div className="flex" key={book.id}>
               <img className="w-[200px] p-2" src={`data:image/png;base64,${book.imageBase64}`} alt="Book Image"/>
               <div>
                  <div className="flex mt-2 flex-col items-start text-2xl font-medium text-gray-600">{book.title}</div>
                  <div className="flex text-sm text-gray-400">by {book.author}</div>
                  <div className="border-t-2 mt-2 mb-3 border-gray-200"></div>
                  <div className="flex font-light tracking-wider text-justified text-sm text-black leading-6 mb-4" style={{fontFamily:'Google Sans'}}>{book.description}</div>
                  {/*<div className="flex text-gray-600 mb-2">Published by {book.publisher}</div>*/}
               </div>
               {/* Column 3 */}
               <div className="flex"></div>
            </div>
         ))}
      </div>
   )
}

export default BookView
