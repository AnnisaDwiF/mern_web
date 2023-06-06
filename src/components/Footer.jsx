import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className="bg-white text-bl ack py-3 shadow" style={{ marginTop: '30px' }}>
            <div className="container">
                <div className="mt-5 text-center" style={{ marginTop: '5px' }}>
                    <h5>Follow Me</h5>
                    <ul className="list-inline">
                        <li className="list-inline-item">
                            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faFacebook} size="2x" />
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faTwitter} size="2x" />
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faInstagram} size="2x" />
                            </a>
                        </li>
                    </ul>
                </div>
                <hr />
                <p className="text-center">&copy; 2023 My Website. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
