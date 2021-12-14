import React, { useState } from 'react';
import styles from './_app.module.scss';
import background from './assets/images/bg.jpg';
import Modal from './components/Modal';

import elgatoImage from './assets/images/elgato-key-light.png';

function App() {

  const [isOpened, setOpened] = useState(false);

  const modals = [
    {
      heading: "Elgato Key Lights",
      paragraphs: [
        "These lights are great if you shoot video at your desk.",
        "My desk is pushed up against the wall, so I didn’t have room for a large soft box. These lights still deliver on the look that I wanted. Plus, it comes with a desktop app where you can adjust the brightness and temperature."
      ],
      price: "169.99",
      link: "http://amazon.com",
      image: elgatoImage
    },
  ];

  const openModal = () => {
    setOpened(true);
  }

  const closeModal = () => {
    setOpened(false);
  }

  return (
    <div className={styles.wrapper}>
      <svg viewBox="0 0 1440 1024" fill="none" xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink">
        <image href={background} width="1440" height="1024" />
        <a href="#" className={styles.anchor} onClick={openModal}>
          <circle className={styles.dot} cx="136.5" cy="113.5" r="17.5" id="elgato-keylight" />
          <circle className={styles.dotBig} cx="136.5" cy="113.5" r="22" stroke="#F41E82" strokeWidth="6px" opacity="0" />
        </a>
      </svg>
      {isOpened && <Modal handleClose={closeModal} content={modals[0]} />}
    </div>
  );
}

export default App;
