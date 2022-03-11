import React from 'react'
import { HiHome } from 'react-icons/hi'
import { BiBus } from 'react-icons/bi'
import { IoLogOutOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'

export default function Template(props) {
  return (

    <div className="flex flex-col h-screen justify-between">
      <div className='w-full grid grid-cols-12 items-center text-white bg-gray-800 text-xl'>
        <div className='col-span-2'></div>
        <div className='col-span-8 text-xl text-center'>Lucitik</div>
      </div>
      <div className='container mx-auto px-4 space-y-4 my-4 overflow-auto h-full'>
        {props.children}
      </div>
    </div>
  )
}
