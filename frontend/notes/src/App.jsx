import React from 'react'
import './App.css'
import NotesList from './assets/components/NotesList'
import AddNote from './assets/components/AddNote'

const App = () => {
  return (
    <div className='container'>
      <h1>Notes Management App</h1>

      <AddNote/>
      <NotesList />
    </div>
  )
}

export default App