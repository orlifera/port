import React, { useEffect, useState } from 'react';
import querystring from 'querystring';
import { AiOutlinePauseCircle } from 'react-icons/ai';
import { BiErrorCircle } from 'react-icons/bi'
import { HiOutlineStatusOffline } from 'react-icons/hi'

//IMPORTANT FOR ANYONE READING THIS CODE:
//I went too far, and tought too much of myself. I made the API requests and functions, the rest of the code i got from tutorials and chatGPT

//Setting up the Spotify API and Endpoints
const NOW_PLAYING_ENDPOINT = 'https://api.spotify.com/v1/me/player/currently-playing';
const TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token';
const client_id = '66e0e81547a04ce5b9a4dad7cbccb897';
const client_secret = '5fbbb0c7a95648e29aff41dd5d60d105';
const refresh_token = 'AQBvQO6kNJDPYFxZ4SgylDP_TdySKoFkMJp7bMi55GA_c1BAzyolPq03sf4GFDx23IVdBqy1w6Vx8MI5rKvWMeXrChGM3qtzlugmGPsGtC2PtUYO9n7sEop_lCb61lWaW9k';

//Function to generate an access token using the refresh token every time the website is opened or refreshed
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

        //Extracting the required data from the response into separate variables
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
function NowPlaying() {

    //Hold information about the currently playing song
    const [nowPlaying, setNowPlaying] = useState(null);

    useEffect(() => {
        const fetchNowPlaying = async () => {
            const data = await getNowPlaying();
            setNowPlaying(data)
        };

        //This calls the fetchNowPlaying function every second to keep the widget updated
        const interval = setInterval(() => {
            fetchNowPlaying();
        }, 1000);

        return () => clearInterval(interval); // Cleanup interval on unmount

    }, []);

    //Setting default values for the listener's current state and the duration of the song played
    let playerState = '';
    let secondsPlayed = 0, minutesPlayed = 0, secondsTotal = 0, minutesTotal = 0;
    let albumImageUrl = './images/albumCover.png';
    let title = '';
    let artist = '';

    if (nowPlaying != null && nowPlaying.title) {
        //Used while displaying a sound bar/pause icon on the widget
        nowPlaying.isPlaying ? playerState = 'PLAY' : playerState = 'PAUSE';

        //Converting the playback duration from seconds to minutes and seconds
        secondsPlayed = Math.floor(nowPlaying.timePlayed / 1000);
        minutesPlayed = Math.floor(secondsPlayed / 60);
        secondsPlayed = secondsPlayed % 60;

        //Converting the song duration from seconds to minutes and seconds
        secondsTotal = Math.floor(nowPlaying.timeTotal / 1000);
        minutesTotal = Math.floor(secondsTotal / 60);
        secondsTotal = secondsTotal % 60;

        albumImageUrl = nowPlaying.albumImageUrl;
        title = nowPlaying.title;
        artist = nowPlaying.artist;
    } else if (nowPlaying === 'Currently Not Playing') { //If the response returns this error message then we print the following text in the widget
        playerState = 'OFFLINE';
        title = 'User is';
        artist = 'currently Offline';
    } else { //If the response wasn't able to fetch anything then we display this
        title = 'Failed to';
        artist = 'fetch song';
    }

    const pad = (n) => {
        return (n < 10) ? ("0" + n) : n;
    }

    // Calculate the progress percentage
    const progress = (nowPlaying && nowPlaying.timePlayed && nowPlaying.timeTotal) ? (nowPlaying.timePlayed / nowPlaying.timeTotal) * 100 : 0;

    return (
        <div className='nowPlayingCard'>
            <div id='Now'>
                <svg width="30px" height="30px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#1ED760" fill-rule="evenodd" d="M19.0983701,10.6382791 C15.230178,8.34118115 8.85003755,8.12986439 5.15729493,9.25058527 C4.56433588,9.43062856 3.93727638,9.09580812 3.75758647,8.50284907 C3.57789655,7.90953664 3.91236362,7.28283051 4.50585273,7.10261054 C8.74455585,5.81598127 15.7909802,6.06440214 20.2440037,8.70780512 C20.7774195,9.02442687 20.9525156,9.71332656 20.6362472,10.2456822 C20.3198021,10.779098 19.6305491,10.9549008 19.0983701,10.6382791 M18.971686,14.0407262 C18.7004726,14.4810283 18.1246521,14.6190203 17.6848801,14.3486903 C14.4600027,12.3664473 9.54264764,11.792217 5.72728477,12.9503953 C5.23256328,13.0998719 4.70992535,12.8208843 4.55974204,12.3270462 C4.41061884,11.8323247 4.68978312,11.3107469 5.18362118,11.1602103 C9.5419409,9.83771368 14.9600247,10.4782013 18.6638986,12.7544503 C19.1036707,13.0253103 19.242016,13.6013075 18.971686,14.0407262 M17.5034233,17.308185 C17.2876894,17.6617342 16.827245,17.7725165 16.4749326,17.5571359 C13.6571403,15.8347984 10.1101639,15.4459119 5.93312425,16.4000177 C5.53063298,16.4922479 5.12937851,16.2399399 5.03767834,15.8376253 C4.94544812,15.4351341 5.19669597,15.0338796 5.60024736,14.9420027 C10.1712973,13.8970803 14.0923186,14.3467468 17.2551791,16.2796943 C17.6078449,16.4948982 17.7189805,16.9556959 17.5034233,17.308185 M12,0 C5.37267547,0 0,5.37249879 0,11.9998233 C0,18.6278546 5.37267547,24 12,24 C18.6275012,24 24,18.6278546 24,11.9998233 C24,5.37249879 18.6275012,0 12,0" />
                </svg>
                <h2 >Now Playing</h2>
            </div>
            <div className='nowPlayingInfo'>

                {/* Album image and href displayed based on playerState */ }
                <div className='nowPlayingImage'>
                    {
                        playerState === 'PLAY' || playerState === 'PAUSE' ? <a href={ nowPlaying.songUrl }><img src={ albumImageUrl } alt="Album" /></a> : <img src={ albumImageUrl } alt="Album" />
                    }
                </div>
                <div id='nowPlayingDetails'>
                    {/* Song Title displayed based on playerState */ }
                    <div className="NowPlaying">
                        { playerState === 'PLAY' || playerState === 'PAUSE' ? <a href={ nowPlaying.songUrl }>{ title }</a> : title }
                        { playerState === 'PLAY' || playerState === 'PAUSE' ? <a href={ nowPlaying.artistUrl }>{ artist }</a> : artist }
                    </div>
                    <div className='progress'>
                        { playerState === 'PLAY' ?
                            <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" id='song'>
                                <path d="M22 17V12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12V18" />
                                <path d="M8 15.1871C8 14.6088 8 14.3196 7.93097 14.0899C7.77135 13.5588 7.35457 13.156 6.83579 13.0313C6.61143 12.9775 6.33578 13.0002 5.78447 13.0457C4.82772 13.1247 4.34935 13.1642 3.95934 13.3151C3.06004 13.6629 2.3739 14.4394 2.1131 15.4044C2 15.8229 2 16.3248 2 17.3285V17.514C2 18.5431 2 19.0577 2.12305 19.493C2.36454 20.3475 2.942 21.0543 3.71133 21.437C4.10333 21.632 4.58932 21.7123 5.56129 21.8728C6.20632 21.9793 6.52883 22.0326 6.78984 21.9788C7.30414 21.8729 7.72826 21.4938 7.90852 20.9791C8 20.7178 8 20.3763 8 19.6934V15.1871Z" />
                                <path d="M16 15.1871C16 14.6088 16 14.3196 16.069 14.0899C16.2286 13.5588 16.6454 13.156 17.1642 13.0313C17.3886 12.9775 17.6642 13.0002 18.2155 13.0457C19.1723 13.1247 19.6506 13.1642 20.0407 13.3151C20.94 13.6629 21.6261 14.4394 21.8869 15.4044C22 15.8229 22 16.3248 22 17.3285V17.514C22 18.5431 22 19.0577 21.877 19.493C21.6355 20.3475 21.058 21.0543 20.2887 21.437C19.8967 21.632 19.4107 21.7123 18.4387 21.8728C17.7937 21.9793 17.4712 22.0326 17.2102 21.9788C16.6959 21.8729 16.2717 21.4938 16.0915 20.9791C16 20.7178 16 20.3763 16 19.6934V15.1871Z" />
                                <path d="M12 6.5L12 11.5" />
                                <path d="M15 8L15 10" />
                                <path d="M9 8L9 10" />
                            </svg>
                            : playerState === 'PAUSE' ? <AiOutlinePauseCircle size={ 40 } color='white' /> : playerState === 'OFFLINE' ? <HiOutlineStatusOffline size={ 40 } color='white' /> : <BiErrorCircle size={ 40 } /> }

                        {/* Progress bar */ }
                        <progress
                            value={ nowPlaying ? (nowPlaying.timePlayed / nowPlaying.timeTotal) * 100 : 0 }
                            max="100"
                            className="custom-progress-bar"
                        ></progress>
                        {/* Song Timer displayed based on playerState */ }
                        <div className='nowPlayingTime'>{ pad(minutesPlayed) }:{ pad(secondsPlayed) } / { pad(minutesTotal) }:{ pad(secondsTotal) }</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NowPlaying;


