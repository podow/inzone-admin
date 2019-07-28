import React from 'react';
import classNames from 'classnames';

import styles from './styles/Burger.module.scss';

import Button from './Button';

const Burger = ({onClick}) => (
  <Button onClick={onClick}>
    <span className={classNames([styles.pan])}/>
    <span className={classNames([styles.pan])}/>
    <span className={classNames([styles.pan])}/>
  </Button>
);

export default Burger;
