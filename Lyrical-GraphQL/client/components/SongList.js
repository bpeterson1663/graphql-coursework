import React from 'react'
import { useQuery, gql } from '@apollo/client'
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
    console.log(loading, error, data)
    if(loading) return 'Loading....'
    return (
        <div>
            Song List
            {data.songs.map(song => <div key={song.id}>{song.title}</div>)}
        </div>
    )
}


export default SongList