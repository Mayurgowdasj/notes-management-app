import React, { useEffect, useState } from 'react'
import axios from 'axios'

const NotesList = () => {

    const [notes, setNotes] = useState([])

    const fetchNotes = async() => {
        const response = await axios.get('http://localhost:5000/api/getNotes')
        setNotes(response.data)
    }

    useEffect(()=>{
        fetchNotes()
    }, [])

    const deleteNote = async(id) => {
        let bool = window.confirm('Are you sure you want to delete this?')
        if(bool){
            await axios.delete(`http://localhost:5000/api/deleteNote/${id}`)
        }    
        fetchNotes()
    }

    return (
        <div>
            {
                notes.map((note)=>(
                    <div key={note._id} className='note-card'>

                        <h3>{note.title}</h3>
                        <p>{note.description}</p>

                        <button onClick={()=>deleteNote(note._id)}>
                            Delete
                        </button>
                    </div>
                ))
            }
        </div>
    )
}

export default NotesList