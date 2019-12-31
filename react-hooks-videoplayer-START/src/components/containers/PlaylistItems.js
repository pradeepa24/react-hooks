import React, { Component } from 'react';
import PlayListItem from '../PlaylistItem';

import StyledPlaylistitems from '../styles/StyledPlaylistitems';


const PlayListItems = ({videos, active}) => (
          <StyledPlaylistitems>
             {/* <PlayListItem /> */}
             {videos.map(video =>(
                 <PlayListItem
                 key={video.id}
                 video={video}
                 active={video.id === active.id ? true : false}
                 played={video.played}
                 />
             ))}
          </StyledPlaylistitems>

)
export default PlayListItems;