import React from 'react';
import styled from "styled-components";

function MusicThumbnail(props) {

    return (
        <div>
            {props.src.map((link, index) => {
                const addr = link.thumbnails.high.url;
                console.log(link.thumbnails)
                const id = link.resourceId.videoId;
                return (
                        <ImgButton alt={link.title} onClick={props.handleClick} id={id} key={index} src={addr} />
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
  @media screen and (max-width: 700px) {
    width: 20%;
  }
`;