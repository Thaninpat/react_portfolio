import React from 'react';
import {
  FaFacebookF,
  FaInstagram,
  FaPinterest,
  FaTwitter,
} from 'react-icons/fa';

const Contact = () => {
  return (
    <div className='contact'>
      <div className='container'>
        <div className='contactSection'>
          <div className='row' style={{ justifyContent: 'center' }}>
            <div className='col-6'>
              <div className='contactSection-logo'>
                <h2>TNP.O</h2>
              </div>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad
                possimus reiciendis aperiam corporis vitae deleniti est quas
                nobis, corrupti iste consectetur sequi sapiente illo totam dolor
                incidunt animi! Tenetur quibusdam placeat sequi voluptatum,
                ipsam accusantium nobis quo ducimus. Vitae, repellendus.
              </p>
              <ul className='contactCircles'>
                <li>
                  <FaFacebookF />
                </li>
                <li>
                  <FaTwitter />
                </li>
                <li>
                  <FaPinterest />
                </li>
                <li>
                  <FaInstagram />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
