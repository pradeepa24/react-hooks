import React, { Component } from 'react';
import StyledPlaylistHeader from './styles/StyledPlaylistHeader';
import StyledJourney from './styles/StyledJourney';
const PlayListHeader = ({active, total}) =>{
    return (
        <StyledPlaylistHeader>
          <p>{active.title}</p>
          <StyledJourney>
              {active.num} / {total}
          </StyledJourney>
        </StyledPlaylistHeader>
    )
}
export default PlayListHeader;