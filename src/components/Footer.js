import React from 'react';
import classNames from 'classnames';

import styles from './styles/Footer.module.scss';

const Footer = () => (
    <footer
        className={classNames([
            styles.footer
        ])}
    >
        <strong>Copyright</strong> InZone © 2014-2018
    </footer>
);

export default Footer;