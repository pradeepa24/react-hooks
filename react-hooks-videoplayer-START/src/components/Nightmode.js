import React, { Component } from 'react';
import StyledNightmode from './styles/StyledNightmode';

const NightMode = ({nightModeCallback, nightMode}) =>{
    return (
        <StyledNightmode>
         <span>
          Nightmode:
        </span>
        <label className="switch">
          <input type="checkbox" checked={nightMode} onChange={nightModeCallback} />
          <span className="slider round"></span>
        </label>
        </StyledNightmode>
        
    )
}
export default NightMode;