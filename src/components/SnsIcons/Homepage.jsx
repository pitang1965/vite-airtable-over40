import React from 'react';
import PropTypes from 'prop-types';
import SnsIcon from './SnsIcon';

export const Homepage = ({ url }) => <SnsIcon href={url} iconName='HomepageIcon' />;

Homepage.propTypes = {
  url: PropTypes.string.isRequired,
};

export default Homepage;
