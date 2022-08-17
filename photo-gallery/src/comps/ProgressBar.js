import React from 'react'
import useStorage from '../hooks/useStorage'

const ProgressBar = ({file, setFile}) => {
    const { url, progress } = useStorage(file);
    console.log(progress, url);


    return (
        <div className='progress-bar'>Progres</div>
    )
}

export default ProgressBar;