import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
      <footer style={styles.footer}>
        <div style={styles.container}>
          <div style={styles.left}>
            <p style={styles.copyright}>
              &copy; {new Date().getFullYear()} Ecommerce. All rights reserved.
            </p>
            {/* <p style={styles.tagline}>Every moment, perfectly timed.</p> */}
          </div>
          <div style={styles.right}>
            <a
              href="https://www.facebook.com"
              style={styles.icon}
              target="_blank"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.twitter.com"
              style={styles.icon}
              target="_blank"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.instagram.com"
              style={styles.icon}
              target="_blank"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </footer>
    );
};

const styles = {
    footer: {
        backgroundColor: '#f5f5f5',
        padding: '10px',
    },
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    left: {
        flex: 1,
    },
    right: {
        flex: 1,
        display: 'flex',
        justifyContent: 'flex-end',
    },
    copyright: {
      fontSize: '14px',
      fontFamily:  "ui-sans-serif, system-ui, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji",
        color: '#888',
        marginBottom: '5px',
    },
    tagline: {
        fontSize: '16px',
        fontWeight: 'bold',
        marginBottom: '10px',
    },
    icon: {
        fontSize: '20px',
        color: '#888',
        marginLeft: '10px',
    },
};

export default Footer;