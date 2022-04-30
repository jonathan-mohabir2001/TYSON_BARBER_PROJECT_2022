import React from 'react';
import { Container,Row } from 'react-bootstrap';

import last_vid from './images/last_vid.mp4';

function Gallery() {
  return (
    <div className="gallery-main-div">
      <section>
        <Container fluid>
          <Row>
          <div className='video-div'>
            <video autoPlay loop muted >
              <source src={last_vid} type="video/mp4" />
            </video>
          </div>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default Gallery;
