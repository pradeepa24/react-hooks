import React, { Component } from 'react';
import Video from '../Video';
import PlayList from '../containers/Playlist';

const WbnPlayer = props =>{
    return (
        <div style={{height:"100vh",width:"100vw",backgroundColor:"beige"}}>
          <Video />
          <PlayList />
        </div>
    )
}
export default WbnPlayer;