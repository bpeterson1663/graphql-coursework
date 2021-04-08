import React, { useState } from 'react'

const SongForm = ({handleOnSubmit}) => {
    const [songTitle, setSongTitle] = useState('')
    const submitHandler = (event) => {
        event.preventDefault()
        handleOnSubmit(songTitle)
    }
    return (
        <div>
            <h3>Create a New Song</h3>
            <form onSubmit={submitHandler}>
                <label>Song Title: </label>
                <input onChange={event => setSongTitle(event.target.value)} value={songTitle}/>
                <button type="submit">Create Song</button>
            </form>
        </div>
    )
}

export default SongForm