import React, { useState, useEffect } from 'react';
import querystring from 'querystring';

const PLAYLIST_ENDPOINT = 'https://api.spotify.com/v1/playlists/';
const TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token';
//should be in .env but for the sake of simplicity
const client_id = '66e0e81547a04ce5b9a4dad7cbccb897';
const client_secret = '5fbbb0c7a95648e29aff41dd5d60d105';
const refresh_token = 'AQBvQO6kNJDPYFxZ4SgylDP_TdySKoFkMJp7bMi55GA_c1BAzyolPq03sf4GFDx23IVdBqy1w6Vx8MI5rKvWMeXrChGM3qtzlugmGPsGtC2PtUYO9n7sEop_lCb61lWaW9k';
const getAccessToken = async (client_id, client_secret, refresh_token) => {
    const basic = btoa(`${client_id}:${client_secret}`);
    const response = await fetch(TOKEN_ENDPOINT, {
        method: 'POST',
        headers: {
            Authorization: `Basic ${basic}`,
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: querystring.stringify({
            grant_type: 'refresh_token',
            refresh_token,
        }),
    });

    return response.json();
};

const Playlist = ({ playlistName }) => {
    const [playlist, setPlaylist] = useState(null);

    useEffect(() => {
        const fetchPlaylist = async () => {
            try {
                const { access_token } = await getAccessToken(client_id, client_secret, refresh_token);
                const response = await fetch(`${PLAYLIST_ENDPOINT}${playlistName}`, {
                    headers: {
                        Authorization: `Bearer ${access_token}`,
                    },
                });

                if (response.ok) {
                    const data = await response.json();
                    setPlaylist(data);
                } else {
                    console.error('Failed to fetch playlist');
                }
            } catch (error) {
                console.error('Error fetching playlist: ', error);
            }
        };

        fetchPlaylist();
    }, [playlistName]);

    if (!playlist) {
        return <div>Loading...</div>;
    }

    return (
        <li className='card-container'>
            <div className='playlist-card'>
                <h2 className='playlist-title'>{ playlist.name }</h2>
                <p className='playlist-count'>Total Songs: { playlist.tracks.total }</p>
                <img className='playlist-cover' src={ playlist.images[0].url } alt="Playlist Cover" />
                <ul>
                    { playlist.tracks.items.map((item) => (
                        <li className='song-details' key={ item.track.id }>
                            <img className='song-cover' src={ item.track.album.images[0].url } alt="Song Cover" />
                            <div >
                                <p>{ item.track.name }</p>
                                <p>Duration: { msToMinutesAndSeconds(item.track.duration_ms) }</p>
                            </div>
                        </li>
                    )) }
                </ul>
            </div>
        </li>

    );
};



function msToMinutesAndSeconds(ms) {
    const minutes = Math.floor(ms / 60000);
    const seconds = ((ms % 60000) / 1000).toFixed(0);
    return `${minutes}:${(seconds < 10 ? '0' : '')}${seconds}`;
}


export default Playlist;
