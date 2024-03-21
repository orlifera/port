import React from 'react'
import Me from '../components/Me'
import NowPlaying from '../components/Spotify/NowPlaying'
import PlaylistContainer from '../components/Spotify/PlaylistContainer'




function About() {
    return (
        <>
            <Me />
            <NowPlaying />
            <PlaylistContainer />
        </>
    )
}

export default About