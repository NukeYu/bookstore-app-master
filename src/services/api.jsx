import request from '../util/request'

// const apiUrl = process.env.API_URL
const apiUrl = 'http://localhost:3001'

const apis = {
  getBooks: () => request(`${apiUrl}/books`),

  getBookById: (id) => request(`${apiUrl}/books/${id}`),

  addBook: (formData) => request(`${apiUrl}/books`, 'POST', formData),

  editBook: (id, formData) => request(`${apiUrl}/books/${id}`, 'PUT', formData),

  removeBook: (id) => request(`${apiUrl}/books/${id}`, 'DELETE'),
}

export default apis
