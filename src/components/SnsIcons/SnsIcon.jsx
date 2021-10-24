import React from 'react';
import PropTypes from "prop-types";
import styled from 'styled-components';
import {
  FaFortAwesome,
  FaTwitter,
  FaGithub,
  FaInstagram,
  FaYoutube,
} from 'react-icons/fa';

const CircleIcon = styled.a`
  text-align: center;
  margin-right: 0.5rem;
  font-size: 20px;
  line-height: 40px;
  display: inline-block;
  width: 40px;
  height: 40px;
  transition: all 0.3s;
  border-radius: 100%;
  outline: none;
  * {
    color: var(--main-fg-color);
  }
  background-color: var(--main-bg-gradient-color2);
  &:active,
  &:focus,
  &:hover {
    background-color: rgb(198, 221, 65);
  }
`;

const SnsIcon = ({ href, iconName }) => {
  return (
    <CircleIcon
      className='circle-icon'
      href={href}
      target='_blank'
      rel='noopener noreferrer'
      aria-label={iconName}
    >
      {iconName === 'HomepageIcon' && <FaFortAwesome />}
      {iconName === 'TwitterIcon' && <FaTwitter />}
      {iconName === 'GithubIcon' && <FaGithub />}
      {iconName === 'InstagramIcon' && <FaInstagram />}
      {iconName === 'YoutubeIcon' && <FaYoutube />}
    </CircleIcon>
  );
};

CircleIcon.propTypes = {
  href: PropTypes.string,
  iconName: PropTypes.string,
};

CircleIcon.defaultProps = {
  href: "",
  iconName: null,
};

export default SnsIcon;