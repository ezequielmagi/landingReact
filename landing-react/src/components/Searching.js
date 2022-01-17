import React from 'react'
import './search.css'

export const Searching = () => {

  
  const handleSearch = () => {
      const search = document.getElementById('search')
      const input = document.querySelector('input')

    search.classList.toggle('active')
    input.focus()
  }
  
  return (
    <>
    <div className='search' id='search'>
      <input type="text" className='input' placeholder='search...' />
      <button className='btn' onClick={ handleSearch }> <i className='fas fa-search'></i> </button>
    </div>
    </>
  )
}
