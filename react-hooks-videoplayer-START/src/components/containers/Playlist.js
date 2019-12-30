import React, { Component } from 'react';
import PlayListHeader from '../PlaylistHeader';
import PlayListItems from '../containers/PlaylistItems';
import NightMode from '../Nightmode';

const PlayList = props =>{
    return (
        <>
          <NightMode />
          <PlayListHeader />
          <PlayListItems />
        </>
    )
}
export default PlayList;