import React, { createContext, useState, useEffect } from 'react'
import api from '../services/api'

export const BookContext = createContext()

const BookContextProvider = ({ children }) => {
  const [books, setBooks] = useState([])

  useEffect(() => {
    const fetchBooks = async () => {
      const allBooks = await api.getBooks()
      console.log('books', allBooks)
      setBooks(allBooks)
    }

    fetchBooks()
  }, [])

  const removeBook = async (id) => {
    await api.removeBook(id)
    setBooks((prevBooks) => prevBooks.filter((book) => book.id !== id))
  }

  const editBook = async (id, formData) => {
    await api.editBook(id, formData)
    setBooks((prevBooks) =>
      prevBooks.map((book) =>
        book.id === id ? { ...book, ...formData } : book
      )
    )
  }

  const getBookById = async (id) => {
    const response = await api.getBookById(id)
    return response.data
  }

 
  return (
    <BookContext.Provider
      value={{ books, removeBook, editBook, getBookById }}
    >
      {children}
    </BookContext.Provider>
  )
}

export default BookContextProvider
