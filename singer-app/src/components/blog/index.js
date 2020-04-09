import React from 'react';
import headerImage from '../../assets/carpathian_01.jpg';

import styles from './blog.module.css';

function Blog() {
    return (
        <div className={`${styles['section-image']} d-flex flex-column justify-content-center position-relative`}> 
                <div className={`${styles.message} d-flex justify-content-center position-absolute`}>Дорогі відвідувачі, наразі цей розділ знаходиться у розробці! Повертайтесь трошки пізніше:) </div>
                <img src={headerImage} className={`${styles.image}`} alt="temporary" />
            </div>
    );
  }

  export default Blog;