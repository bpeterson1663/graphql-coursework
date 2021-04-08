import React from 'react'
import { useQuery, gql } from '@apollo/client'
import SongForm from './SongForm'
const query = gql`
   { 
       songs{
         id,
         title
       }
    }
`

 const SongList = () => {
    const { loading, error, data } = useQuery(query)
    if(loading) return 'Loading....'
    const createNewSong = (songTitle) => {
        console.log("song title ", songTitle)
    }
    return (
        <div>
            <SongForm handleOnSubmit={createNewSong} />
            Song List
            {data.songs.map(song => <div key={song.id}>{song.title}</div>)}
        </div>
    )
}


export default SongList