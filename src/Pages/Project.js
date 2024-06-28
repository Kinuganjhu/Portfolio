import React, { useState } from 'react';
import Data from './Data'; 
import { Button, Modal } from 'react-bootstrap';


const Project = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const openModal = (item) => {
    setSelectedItem(item);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className='container'>
        <h1 className='Skills'>My Portfolio</h1>
        {Data.map((item) => (
          <div key={item.id} className='item'>
            <img src={item.logo} alt={item.title} />
            <h6>{item.title}</h6>
            <Button variant='link' onClick={() => openModal(item)}
           >View</Button>
          </div>
        ))}
      </div>

      {/* Modal */}
      <Modal show={showModal} onHide={closeModal}
      className='info'
     
      >
        <Modal.Header closeButton>
          <Modal.Title>{selectedItem ? selectedItem.title : ''}</Modal.Title>
        </Modal.Header>
        <Modal.Body className ='info'>
          {selectedItem ? selectedItem.description : ''}
          <br />
          <a href={selectedItem ? selectedItem.Github : '#'}>GitHub &rarr;</a>
          <br />
          <a href={selectedItem ? selectedItem.url : '#'}>Live Preview &rarr;</a>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={closeModal}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Project;
