/* eslint-disable @next/next/no-img-element */
import React from 'react';
import PropTypes from 'prop-types';

function AuthorCard({
  email,
  firstName,
  lastName,
  image,
}) {
  return (
    <div>
      <img src={image} alt={firstName} />
      <h1>{[firstName, lastName]}</h1>
      <h2>{email}</h2>
    </div>
  );
}

AuthorCard.propTypes = {
  email: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  image: PropTypes.string,
};

AuthorCard.defaultProps = {
  email: 'Please Edit Email',
  firstName: 'Please Edit Name',
  lastName: 'Please Edit Name',
  image: 'Please Add Image',
};

export default AuthorCard;
