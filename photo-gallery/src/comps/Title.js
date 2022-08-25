import React from 'react';
import  { Link } from 'react-router-dom'; 

const Title = () => {
  return (
      <div className='title'>
            <h1>
              {/* <img class='logo' src= 'photos/Frontline.jpeg' alt='frontline' /> */}
              Frontline<i class="fa-solid fa-cross"></i>
            </h1>
        <h2>Our Family </h2>
        <p>
          "We love him, because he first loved us..." 1 John 4:19
        </p>
      </div>
  )
}

export default Title;