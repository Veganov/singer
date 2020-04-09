import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styles from "./footer.module.css";

function Footer() {
    return (
        <footer className={`${styles['sticky-footer']} py-1 bg-dark text-white-50 mt-4`}>
        <div className="container text-center">
            <div className={`${styles.social} d-flex flex-row justify-content-around`} > 
                <a href="https://www.facebook.com/profile.php?id=100012462035520" ><FontAwesomeIcon icon={['fab', 'facebook']} className={styles.facebook}/></a>
                <a href="https://www.instagram.com/golden.otaman/" ><FontAwesomeIcon icon={['fab', 'instagram']} className={styles.instagramm}/></a>
                <a href="https://twitter.com/OtamanKarpat" ><FontAwesomeIcon icon={['fab', 'twitter']} className={styles.twitter}/></a>
            </div>
            <small>All rights reserved &copy; Ivan Popovych 2020</small>
        </div>
      </footer>
    );
  }

  export default Footer;