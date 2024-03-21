import React, { useEffect, useState } from 'react';
import querystring from 'querystring';
import { AiOutlinePauseCircle } from 'react-icons/ai';
import { BiErrorCircle } from 'react-icons/bi'
import { HiOutlineStatusOffline } from 'react-icons/hi'

//Setting up the Spotify API and Endpoints
const NOW_PLAYING_ENDPOINT = 'https://api.spotify.com/v1/me/player/currently-playing';
const TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token';
const client_id = '66e0e81547a04ce5b9a4dad7cbccb897';
const client_secret = '5fbbb0c7a95648e29aff41dd5d60d105';
const refresh_token = 'AQBvQO6kNJDPYFxZ4SgylDP_TdySKoFkMJp7bMi55GA_c1BAzyolPq03sf4GFDx23IVdBqy1w6Vx8MI5rKvWMeXrChGM3qtzlugmGPsGtC2PtUYO9n7sEop_lCb61lWaW9k';


//Function to generate an access token using the refresh token everytime the website is opened or refreshed
export const getAccessToken = async (client_id, client_secret, refresh_token) => {
    //Creates a base64 code of client_id:client_secret as required by the API
    const basic = btoa(`${client_id}:${client_secret}`);

    //The response will contain the access token
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

//Uses the access token to fetch the currently playing song
export const getNowPlaying = async () => {
    try {

        //Generating an access token
        const { access_token } = await getAccessToken(client_id, client_secret, refresh_token);

        //Fetching the response
        const response = await fetch(NOW_PLAYING_ENDPOINT, {
            headers: {
                Authorization: `Bearer ${access_token}`,
            },
        });

        //If response status > 400 means there was some error while fetching the required information
        if (response.status > 400) {
            throw new Error('Unable to Fetch Song');
        } else if (response.status === 204) { //The response was fetched but there was no content
            throw new Error('Currently Not Playing')
        }

        //Extracting the required data from the response into seperate variables
        const song = await response.json();
        const albumImageUrl = song.item.album.images[0].url;
        const artist = song.item.artists.map((artist) => artist.name).join(', ');
        const isPlaying = song.is_playing;
        const songUrl = song.item.external_urls.spotify;
        const title = song.item.name;
        const timePlayed = song.progress_ms;
        const timeTotal = song.item.duration_ms;
        const artistUrl = song.item.album.artists[0].external_urls.spotify;

        //Returning the song details
        return {
            albumImageUrl,
            artist,
            isPlaying,
            songUrl,
            title,
            timePlayed,
            timeTotal,
            artistUrl
        };
    } catch (error) {
        console.error('Error fetching currently playing song: ', error);
        return error.message.toString();
    }
};

//Main function to process the data and render the widget
const NowPlaying = () => {

    //Hold information about the currently playing song
    const [nowPlaying, setNowPlaying] = useState(null);

    useEffect(() => {
        const fetchNowPlaying = async () => {
            const data = await getNowPlaying();
            setNowPlaying(data)
        };

        //The spotify API does not support web sockets, so inorder to keep updating the currently playing song and time elapsed - we call the API every second
        setInterval(() => {
            fetchNowPlaying();
        }, 1000);

    }, []);

    //Setting default values for the listener's current state and the duration of the song played
    let playerState = ''
    let secondsPlayed = 0, minutesPlayed = 0, secondsTotal = 0, minutesTotal = 0;
    let albumImageUrl = './images/albumCover.png'
    let title = ''
    let artist = ''

    if (nowPlaying != null && nowPlaying.title) {

        //Used while displaing a sounbar/pause icon on the widget
        nowPlaying.isPlaying ? playerState = 'PLAY' : playerState = 'PAUSE'

        //Converting the playback duration from seconds to minutes and seconds
        secondsPlayed = Math.floor(nowPlaying.timePlayed / 1000);
        minutesPlayed = Math.floor(secondsPlayed / 60);
        secondsPlayed = secondsPlayed % 60;

        //Converting the song duration from seconds to minutes and seconds
        secondsTotal = Math.floor(nowPlaying.timeTotal / 1000);
        minutesTotal = Math.floor(secondsTotal / 60);
        secondsTotal = secondsTotal % 60;

        albumImageUrl = nowPlaying.albumImageUrl
        title = nowPlaying.title
        artist = nowPlaying.artist
    } else if (nowPlaying === 'Currently Not Playing') { //If the response returns this error message then we print the following text in the widget
        playerState = 'OFFLINE'
        title = 'User is'
        artist = 'currently Offline'
    } else { //If the response wasn't able to fetch anything then we display this
        title = 'Failed to'
        artist = 'fetch song'
    }

    //Used to set 0 as padding when the it is a single digit number
    const pad = (n) => {
        return (n < 10) ? ("0" + n) : n;
    }

    return (
        //Depending on the value of playerState, the href, album image and icons are updated
        <a style={ { textDecoration: 'none', color: 'black' } } href={ playerState === 'PLAY' || playerState === 'PAUSE' ? nowPlaying.songUrl : '' }>
            <div className='nowPlayingCard'>
                {/* Albumn image and href displayed based on playerState */ }
                <div className='nowPlayingImage'>
                    {
                        playerState === 'PLAY' || playerState === 'PAUSE' ? <a href={ nowPlaying.songUrl }><img src={ albumImageUrl } alt="Album" /></a> : <img src={ albumImageUrl } alt="Album" />
                    }
                </div>
                <div id='nowPlayingDetails'>
                    {/* Song Title displayed based on playerState */ }
                    <div className={ `nowPlayingTitle ${title.length > 15 ? 'marquee-content' : ' '}` }>
                        { playerState === 'PLAY' || playerState === 'PAUSE' ? <a href={ nowPlaying.songUrl }>{ title }</a> : title }
                    </div>
                    {/* Artist displayed based on playerState */ }
                    <div className='nowPlayingArtist'>
                        { playerState === 'PLAY' || playerState === 'PAUSE' ? <a href={ nowPlaying.artistUrl }>{ artist }</a> : artist }
                    </div>
                    {/* Song Timer displayed based on playerState */ }
                    <div className='nowPlayingTime'>{ pad(minutesPlayed) }:{ pad(secondsPlayed) } / { pad(minutesTotal) }:{ pad(secondsTotal) }</div>
                </div>
                {/* Icon displayed based on playerState */ }
                <div className='nowPlayingState'>
                    { playerState === 'PLAY' ?

                        <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" id='song'>
                            <path d="M22 17V12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12V18" />
                            <path d="M8 15.1871C8 14.6088 8 14.3196 7.93097 14.0899C7.77135 13.5588 7.35457 13.156 6.83579 13.0313C6.61143 12.9775 6.33578 13.0002 5.78447 13.0457C4.82772 13.1247 4.34935 13.1642 3.95934 13.3151C3.06004 13.6629 2.3739 14.4394 2.1131 15.4044C2 15.8229 2 16.3248 2 17.3285V17.514C2 18.5431 2 19.0577 2.12305 19.493C2.36454 20.3475 2.942 21.0543 3.71133 21.437C4.10333 21.632 4.58932 21.7123 5.56129 21.8728C6.20632 21.9793 6.52883 22.0326 6.78984 21.9788C7.30414 21.8729 7.72826 21.4938 7.90852 20.9791C8 20.7178 8 20.3763 8 19.6934V15.1871Z" />
                            <path d="M16 15.1871C16 14.6088 16 14.3196 16.069 14.0899C16.2286 13.5588 16.6454 13.156 17.1642 13.0313C17.3886 12.9775 17.6642 13.0002 18.2155 13.0457C19.1723 13.1247 19.6506 13.1642 20.0407 13.3151C20.94 13.6629 21.6261 14.4394 21.8869 15.4044C22 15.8229 22 16.3248 22 17.3285V17.514C22 18.5431 22 19.0577 21.877 19.493C21.6355 20.3475 21.058 21.0543 20.2887 21.437C19.8967 21.632 19.4107 21.7123 18.4387 21.8728C17.7937 21.9793 17.4712 22.0326 17.2102 21.9788C16.6959 21.8729 16.2717 21.4938 16.0915 20.9791C16 20.7178 16 20.3763 16 19.6934V15.1871Z" />
                            <path d="M12 6.5L12 11.5" />
                            <path d="M15 8L15 10" />
                            <path d="M9 8L9 10" />
                        </svg> : playerState === 'PAUSE' ? <AiOutlinePauseCircle size={ 40 } /> : playerState === 'OFFLINE' ? <HiOutlineStatusOffline size={ 40 } /> : <BiErrorCircle size={ 40 } /> }
                </div>
            </div>
        </a>
    );
};

export default NowPlaying;