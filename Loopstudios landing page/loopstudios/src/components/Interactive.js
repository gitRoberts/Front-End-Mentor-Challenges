import React from 'react'
import interactiveImg from "../images/mobile/image-interactive.jpg";

const Interactive = function() {
  return (
    <section id='interactive'>
        <div>
            <img src={interactiveImg} alt="Image of individual using a VR headset" />
        </div>

        <div className='interactive-text'>
            <h2>The Leader In Interactive VR</h2>
            <p>
                Founded in 2011, Loopstudios has been producing world-class virtual
                reality projects for some of the best companies around the globe.
                Our award-winning creations have transformed businesses through
                digital experiences that bind to their brand.
            </p>
        </div>
    </section>
  )
}

export default Interactive