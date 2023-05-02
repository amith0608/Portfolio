import "./ExperienceStyles.css";
import { useState, useEffect } from 'react';
import React, { Component } from 'react'
import DataTable from "react-data-table-component";


const Experience = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [perPage, setPerPage] = useState(10)
  
    const columns = [
      {
        name: "Sl. No",
        selector: (row) => row.userId,
      },
      {
        name: "Title",
        selector: (row) => row.title,
      },
      {
        name: "Completed",
        selector: (row) => (row.completed ? "Yes" : "No"),
      },
      {
        name: "Completed",
        selector: (row) => (row.completed ? "Yes" : "No"),
      },
    ]
  
    useEffect(() => {
      fetchTableData()
    }, [])
  
    async function fetchTableData() {
      setLoading(true)
      const URL = "https://jsonplaceholder.typicode.com/todos"
      const response = await fetch(URL)
  
      const users = await response.json()
      setData(users)
      setLoading(false)
    }
  
   
    return (
      <div style={{ margin: "20px" }}>
        <DataTable
          title="Work Experience"
          columns={columns}
          data={data}
          progressPending={loading}
          pagination
        />
      </div>
    )
  }
  


export default Experience 

   
