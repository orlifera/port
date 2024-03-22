import React from 'react'
import Playlist from './Playlist'

function PlaylistContainer() {
    return (
        <>
            <h1 className='title'>My Fav Playlists</h1>
            <ul id='playlist'>
                <Playlist playlistName="7w6bemn0gjUa3C2pk8NIWS" />
                <Playlist playlistName="7uN5YSu7fjUnOzcUWT1bCI" />
                <Playlist playlistName="3jHAG6MeaHiVhN5mERUbl6" />
            </ul>
        </>

    )
}

export default PlaylistContainer