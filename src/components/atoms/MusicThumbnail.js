import React from 'react';
import styled from "styled-components";

function MusicThumbnail(props) {

    return (
        <div>
            {props.src.map((link, index) => {
                const addr = link.thumbnails.default.url;
                const id = link.resourceId.videoId;
                return (
                        <ImgButton onClick={props.handleClick} id={id} key={index} src={addr} style={{width: '10%'}}/>
                   )
            })}
        </div>
    );
}

export default MusicThumbnail;

const ImgButton = styled.img`
  width: 10%;  
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
  }
`;