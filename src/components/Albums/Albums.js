import React, {useEffect, useState} from 'react';

import {getAlbums} from  "../../servies/Services"

const Albums = () => {
    const [albums, setAlbums] = useState([])

    useEffect(() => {
        getAlbums().then(res => setAlbums(res.data))
    }, [])

    return (
        <div>
            {albums.map(item=>(
                <h1>{item.title}</h1>
            ))}
        </div>
    );
};

export default Albums;