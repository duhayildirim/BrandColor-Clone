import React, { useState } from 'react'
import Modal from 'react-modal'
import { GrClose } from 'react-icons/gr'

function Sidebar() {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const toggleModal = () => {
    setModalIsOpen(!modalIsOpen)
  }

  return (
    <React.Fragment>
      <aside className="sidebar">
        <div className="logo">
          <a>Brand<b>Colors</b></a>
        </div>
        <div className="description">
          The biggest collection of official brand color codes around. Curated by @brandcolors and friends.
        </div>
        <nav className="menu">
          <ul>
            <li><a href='https://github.com/duhayildirim/BrandColor-Clone' target='_blank'>Suggest a Brand</a></li>
            <li><a onClick={toggleModal}>About BrandColors</a></li>
          </ul>
        </nav>
      </aside>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={toggleModal}
        className="about-modal"
        overlayClassName="about-modal-overlay"
      >
        <button className="modal-close-button" onClick={toggleModal}>
          <GrClose />
        </button>
        <h4>About BrandColors</h4>
        <p>
          BrandColors was created by <strong>DesignBombs</strong>. The goal was to create a helpful reference for the brand color codes that are needed most often.
          <br/>
          <br/>
          It's been featured by Smashing Magazine, CSS-Tricks, Web Design Depot, Tuts+, and over <strong>2 million pageviews.</strong> There are now over <strong>600 brands</strong> with <strong>1600 colors</strong> and the collection is always growing.
        </p>
      </Modal>
    </React.Fragment>
  )
}

export default Sidebar
