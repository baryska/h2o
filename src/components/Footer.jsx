import React from 'react';
import footerStyles from './Footer.module.scss';
import Tooltip from '@mui/material/Tooltip';

const Footer = () => {

  return (
    <footer className={footerStyles.footer}>
      <Tooltip
        title="baryska@gmail.com Tech Stack of this page: React.js, Firebase authentification, Cloudinary (REST API), Material UI, SCSS in modules">
        <h3>© Barbora Skálová, 2023 </h3>
      </Tooltip>

    </footer>
  )
};

export default Footer;
