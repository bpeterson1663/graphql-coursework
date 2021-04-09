import React from 'react'
import { useQuery } from '@apollo/client'
import SongForm from './SongForm'
import { fetchSongs } from '../queries/fetchSongs'


 const SongList = () => {
    const { loading, error, data } = useQuery(fetchSongs)
    if(loading) return 'Loading....'
    return (
        <div>
            <SongForm />
            {data?.songs.map(song => <div key={song.id}>{song.title}</div>)}
        </div>
    )
}


export default SongList