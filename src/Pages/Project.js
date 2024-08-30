import React, { useState } from 'react';
import Data from './Data'; 
import { Button, Offcanvas } from 'react-bootstrap';

const Project = () => {
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const openOffcanvas = (item) => {
    setSelectedItem(item);
    setShowOffcanvas(true);
  };

  const closeOffcanvas = () => {
    setShowOffcanvas(false);
  };

  return (
    <>
      <div className='container'>
        <h1 className='Skills'>My Projects</h1>
        {Data.map((item) => (
          <div key={item.id} className='item'>
            <img src={item.logo} alt={item.title} />
            <div className='Details'>
              <b>{item.title}</b>
              <Button 
                variant='link'
                onClick={() => openOffcanvas(item)}
              >
                View
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Offcanvas */}
      <Offcanvas show={showOffcanvas} onHide={closeOffcanvas} className='info' placement='bottom'>
        <Offcanvas.Header
        className='info'
      closeButton  >
          <Offcanvas.Title>{selectedItem ? selectedItem.title : ''}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className='info'>
          {selectedItem ? selectedItem.description : ''}
          <br />
          <a href={selectedItem ? selectedItem.Github : '#'}>GitHub &rarr;</a>
          <br />
          <a href={selectedItem ? selectedItem.url : '#'}>Live Preview &rarr;</a>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Project;
