import React from 'react';
import PropTypes from 'prop-types';
import SnsIcon from './SnsIcon';

const Twitter = ({ userName }) => (
  <SnsIcon href={`https://twitter.com/${userName}`} iconName='TwitterIcon' />
);
Twitter.propTypes = {
  userName: PropTypes.string.isRequired,
};

export default Twitter;
