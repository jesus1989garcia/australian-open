import React from 'react'
import ReactPlayer from 'react-player'

function Video() {
  return(
    <div className="video">
      <h1 className="title-blue">Watch this years's final</h1>
      <ReactPlayer url="https://www.youtube.com/watch?v=MG-RjlqyaJI" className="video-final"/>
    </div>
  )
}

export default Video