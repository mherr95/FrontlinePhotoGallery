import React from 'react'
import useFirstore  from '../hooks/useFirestore'
import { motion } from 'framer-motion'

const ImageGrid = ({setSelectedImage}) => {
    const { docs } = useFirstore
    ('images');
    console.log(docs);

    return(
        <div className='img-grid'>
            {docs && docs.map( doc => (
            <motion.div className='img-wrap' key={doc.id}
            whileHover= {{opacity: 1}}
            onClick = {() => setSelectedImage(doc.url)}>
                <img src={doc.url} alt='image'/>
            </motion.div>))}
        </div>
    )
}

export default ImageGrid;