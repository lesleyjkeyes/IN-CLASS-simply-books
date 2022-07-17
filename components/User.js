/* eslint-disable @next/next/no-img-element */
import React from 'react';
import PropTypes from 'prop-types';

function User({
  image,
  name,
  email,
  lastLogin,
}) {
  return (
    <div>
      <img src={image} alt={name} />
      <h1>{name}</h1>
      <h2>{email}</h2>
      <h3>{lastLogin}</h3>
    </div>
  );
}

User.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  email: PropTypes.string,
  lastLogin: PropTypes.string,
};

User.defaultProps = {
  image: 'https://d29fhpw069ctt2.cloudfront.net/clipart/89932/preview/dniezby_Generic_Book_preview_e6ad.png',
  name: 'Please Edit Name',
  email: 'Please Edit Email',
  lastLogin: 'No Login Found',
};

export default User;
