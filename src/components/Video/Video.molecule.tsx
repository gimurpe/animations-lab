// ========================================================================================
/*                                                                                      *
 * ATOM: ENVELOPE                                                                 *
 *                                                                                      */
// ========================================================================================
// * Lib
import React from 'react'

// * Utils

// * Styles
import './styles.scss'

// * Display/UI
type Props = {
   src: string
   videoRef?: any
}
const Video = (props: Props) => {
   const { src, videoRef } = props

   return (
      <video
         className="love__background"
         muted={true}
         autoPlay
         playsInline
         loop
         id="myVideo"
         ref={videoRef}
      >
         <source src={src} type="video/webm" />
         Sorry, your browser doesn't support embedded videos.
      </video>
   )
}

export default Video
