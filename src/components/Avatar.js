import React from 'react';
import styles from './styles/Avatar.module.scss'

import colorFrom from '../utils/color-from-string';
import titleInitial from '../utils/title-initials';

const Avatar = ({ name, image }) => (
    <div className={styles.avatar} style={{ backgroundColor: colorFrom(name) }}>
        { image ?
            <img src={image} alt={name} /> :
            titleInitial(name)
        }
    </div>
);

export default Avatar;