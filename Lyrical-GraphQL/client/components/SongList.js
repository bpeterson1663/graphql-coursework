import React from 'react'
import { gql, useQuery, useMutation } from '@apollo/client'
import SongForm from './SongForm'
import { fetchSongs } from '../queries/fetchSongs'

const deleteMutation = gql`
    mutation deleteSong($id: ID){
        deleteSong(id: $id){
            id
        }
    }
`

 const SongList = () => {
    const { loading, error, data } = useQuery(fetchSongs)
    const [deleteSongTitle, {loading: deleteLoading}] = useMutation(deleteMutation)
    if(loading) return 'Loading....'
    if(deleteLoading) console.log("DELETEING")
    const handleDelete = (id) => {
        deleteSongTitle({
            variables: { id: id},
            refetchQueries: [{query: fetchSongs}]
        })
    }
    return (
        <div>
            <SongForm />
            {data?.songs.map(song => <div key={song.id}>{song.title}<button onClick={() => handleDelete(song.id)}>Delete</button></div>)}
        </div>
    )
}


export default SongList