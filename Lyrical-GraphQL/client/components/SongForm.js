import React, { useState } from 'react'
import { gql, useMutation } from '@apollo/client'
import { fetchSongs } from '../queries/fetchSongs'
const mutation = gql`
    mutation addSong($title: String!){
        addSong(title: $title){
            id,
            title
        }
    }
`

const SongForm = () => {
    const [songTitle, setSongTitle] = useState('')
    const [addSongTitle, { data, error, loading}] = useMutation(mutation)

    const submitHandler = (event) => {
        event.preventDefault()
        addSongTitle({ 
            variables: { title: songTitle},
            refetchQueries: [{query: fetchSongs }] 
        });
        setSongTitle('')
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