import React from 'react';
import PropTypes from 'prop-types';
import SnsIcon from './SnsIcon';

const Github = ({ userName }) => (
  <SnsIcon href={`https://github.com/${userName}`} iconName='GithubIcon' />
);

Github.propTypes = {
  userName: PropTypes.string.isRequired,
};

export default Github;
