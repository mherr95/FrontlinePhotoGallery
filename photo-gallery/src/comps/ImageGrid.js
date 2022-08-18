import React from 'react'
import useFirstore  from '../hooks/useFirestore'

const ImageGrid = () => {
    const { docs } = useFirstore
    ('images');
    console.log(docs);

    return(
        <div className='img-grid'>
            {docs && docs.map( doc => (<div className='img-wrap' key={doc.id}>
                <img src={doc.url} alt='image'/>
            </div>))}
        </div>
    )
}

export default ImageGrid;