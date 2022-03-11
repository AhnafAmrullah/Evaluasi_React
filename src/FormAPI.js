import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Button from './components/Button'
import Template from './components/Template'

export default function FormAPI() {
  const [data, setdata] = useState([])
  const [edit, setedit] = useState(null)
  const getData = () => {
    console.log('get data')
    axios.get('http://localhost:3001/ListBarang')
      .then(hasil => {
        setdata(hasil.data)
      })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    const value = e.target.NamaBarang.value
    axios.post('http://localhost:3001/ListBarang', { name: value })
      .then(() => {
        console.log('post')
        getData()
      })

    e.target.NamaBarang.value = ''
  }
  const handleDelete = (id) => {
    axios.delete(`http://localhost:3001/ListBarang/${id}`).then(() => {
      console.log('delete')
      getData()
    })
  }
  const handleEdit = (e) => {
    e.preventDefault()
    console.log('index edit', edit, data[edit].id)
    axios.patch(`http://localhost:3001/ListBarang/${data[edit].id}`, { name: e.target.NamaBarang.value })
      .then(() => {
        getData()
        setedit(null)
      })
  }
  useEffect(() => {
    getData()
  }, [])

  return (
    <Template>
      <form onSubmit={handleSubmit} className="p-5 grid grid-cols-2 gap-4 border rounded-lg drop-shadow-2xl bg-white">
        <input type="text" className="bg-white shadow-md rounded px-2 pt-2 pb-2 mb-2 form-input" name="NamaBarang" placeholder='Nama Barang' />
        <Button type="submit" text="Add New" />
      </form>
      <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-3 items-center'>
        {data.map((NamaBarang, i) => {
          return <div key={i} className='drop-shadow-2xl bg-white border rounded-lg overflow-hidden p-4'>
            {edit === i ?
              <form className='w-full flex space-x-2' onSubmit={(event) => handleEdit(event)}>
                <input className="bg-white shadow-md rounded px-2 pt-2 pb-2 mb-2 form-input" name="NamaBarang" defaultValue={NamaBarang.name} />
                <button className="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded-lg w-1/2">Save</button>
                
              </form>
              : NamaBarang.name
            }
            <div className='flex py-4 gap-4 text-center'>
              <div className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-8 border-b-4 border-blue-700 hover:border-blue-500 rounded-lg w-1/2" onClick={() => setedit(i === edit ? null : i)}>Edit</div>
              <div className="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-8 border-b-4 border-red-700 hover:border-red-500 rounded-lg w-1/2" onClick={() => handleDelete(NamaBarang.id)}>Delete</div>
            </div>
          </div>
        })}
      </div>
    </Template>
  )
}
