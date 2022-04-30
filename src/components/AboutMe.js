import React from 'react';
import Container from 'react-bootstrap/Container';
// ABOUT ME PAGE IS CALLED "HOME" on Navbar navigation pane

const image_1 = new URL('./images/image_1.JPG', import.meta.url);

function AboutMe() {
  return (
    <div>
      <div
        className="home-section"
        style={{
          backgroundImage: `url(${image_1} )`,
        }}
      >
        <h1 className='welcome-title'>Welcome to the TyDaBarber website!</h1>
  

      </div>
    </div>
  );
}

export default AboutMe;
