import React from 'react'
import Header from './Header'
import useNowPlayingMovie from '../hooks/useNowPlayingMovie'
import MainContainer from './MainContainer';


const Browser = () => {
  useNowPlayingMovie();

  return (
    <div>
      <Header/>
      <MainContainer/>
    </div>
  )
}

export default Browser