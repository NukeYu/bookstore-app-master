// EditBookPage.js

import React, { useContext, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { BookContext } from '../context/BookContext'
import { Input, Button, Typography } from 'antd' // 导入所需的组件
import './EditBookPage.css'

const { Title } = Typography

const EditBookPage = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { getBookById, editBook } = useContext(BookContext)
  const existingBook = getBookById(id)
  const [bookData, setBookData] = useState(existingBook)

  const handleSaveChanges = () => {
    editBook(id, bookData)
    navigate('/')
  }

  return (
    <div className="container">
      <Title level={2} className="title">
        Edit Book
      </Title>
      <div className="form">
        <label className="label">Title:</label>
        <Input
          className="input"
          value={bookData.title}
          onChange={(e) => setBookData({ ...bookData, title: e.target.value })}
        />

        <label className="label">ISBN:</label>
        <Input
          className="input"
          value={bookData.isbn}
          onChange={(e) => setBookData({ ...bookData, isbn: e.target.value })}
        />

        <label className="label">Description:</label>
        <Input.TextArea
          className="textarea"
          value={bookData.description}
          onChange={(e) =>
            setBookData({ ...bookData, description: e.target.value })
          }
        />

        <div className="button-container">
          <Button className="button" type="primary" onClick={handleSaveChanges}>
            Save Changes
          </Button>
        </div>
      </div>
    </div>
  )
}

export default EditBookPage
