import React from 'react'

export default function Button({ text, ...props }) {
  console.log(props)
  return (
    <button {...props} className="bg-yellow-600 hover:bg-yellow-500 text-white font-bold py-2 px-8 border-b-4 border-yellow-700 hover:border-yellow-600 rounded-lg">
      {text}
    </button>
  )
}
