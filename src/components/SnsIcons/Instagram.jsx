import React from 'react';
import PropTypes from 'prop-types';
import SnsIcon from './SnsIcon';

const Instagram = ({ userName }) => (
  <SnsIcon
    href={`https://www.instagram.com/${userName}`}
    iconName='InstagramIcon'
  />
);

Instagram.propTypes = {
  userName: PropTypes.string.isRequired,
};

export default Instagram;
