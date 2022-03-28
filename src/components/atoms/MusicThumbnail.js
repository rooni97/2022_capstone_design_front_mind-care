import React from 'react';

function MusicThumbnail(props) {

    return (
        <div>
            {props.src.map((link, index) => {
                const addr = link.thumbnails.default.url;
                const id = link.resourceId.videoId;
                return (
                        <img onClick={props.handleClick} id={id} key={index} src={addr} style={{width: '10%'}}/>
                   )
            })}
        </div>
    );
}

export default MusicThumbnail;