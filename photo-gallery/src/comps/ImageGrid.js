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
            layout
            whileHover= {{opacity: 1}}
            onClick = {() => setSelectedImage(doc.url)}
            >
            <motion.img src={doc.url} alt='image'
            initial={{opactiy:0}}
            animate={{opacity:1}}
            transition={{delay:1}}
            />
            </motion.div>
        ))}
        </div>
    )
}

export default ImageGrid;