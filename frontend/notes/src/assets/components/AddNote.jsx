import React, { useState } from 'react'
import axios from 'axios'

const AddNote = () => {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const handleSubmit = async(e) => {
        e.preventDefault()

        const newNote = {
            title,
            description
        }

        await axios.post('http://localhost:5000/api/addNote', newNote)

        alert('Note Added')

        setTitle('')
        setDescription('')
    }

    return (
        <form onSubmit={handleSubmit}>

            <input
                type='text'
                placeholder='Enter Title'
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
            />

            <textarea
                placeholder='Enter Description'
                value={description}
                onChange={(e)=>setDescription(e.target.value)}
            ></textarea>

            <button>Add Note</button>
        </form>
    )
}

export default AddNote