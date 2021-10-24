import React from 'react';
import PropTypes from 'prop-types';
import SnsIcon from './SnsIcon';

const Youtube = ({ url }) => <SnsIcon href={url} iconName='YoutubeIcon' />;

Youtube.propTypes = {
  url: PropTypes.string.isRequired,
};

export default Youtube;
