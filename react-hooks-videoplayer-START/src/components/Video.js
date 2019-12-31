import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import StyledVideowrapper from './styles/StyledVideoWrapper';
import StyledVideo from './styles/StyledVideo';
const Video = ({active,autoplay,endCallback,progressCallback}) =>{
    console.log(active)
    return (
        <StyledVideo>
            <StyledVideowrapper>
              <ReactPlayer
                   width="100%"
                   height="100%"
                   style={{position:"absolute", top:"0"}}
                   playing={autoplay}
                   control={true}
                   url={active.video}
                   onEnded={endCallback}
                   onProgress={progressCallback}
               />
            </StyledVideowrapper>
        </StyledVideo>
    )
}
export default Video;