import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { BookContext } from '../context/BookContext'
import { Table, Space, Button, Typography } from 'antd'
import './HomePage.css'

const { Text } = Typography

const HomePage = () => {
  const { books, removeBook } = useContext(BookContext)

  const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'ISBN',
      dataIndex: 'isbn',
      key: 'isbn',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (text, record) => (
        <Space size="middle">
          <Link to={`/edit/${record.id}`}>
            <Button type="primary">Edit</Button>
          </Link>
          <Button type="primary" danger onClick={() => removeBook(record.id)}>
            Delete
          </Button>
        </Space>
      ),
    },
  ]

  return (
    <div className="container">
      <Typography.Title level={2}>Book List</Typography.Title>
      <Table dataSource={books} columns={columns} rowKey="id" />
    </div>
  )
}

export default HomePage
