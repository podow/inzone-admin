import React, {useState} from 'react'
import {NavLink} from 'react-router-dom';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import styles from './styles/Drawer.module.scss';

import Avatar from './Avatar';

const links = [
  {
    id: 1,
    name: 'Cities',
    to: '/',
    subLinks: [
      {id: 12, name: 'Cities list', to: '/cities'},
      {id: 2, name: 'Add city', to: '/cities/add'}
    ]
  },
  {
    id: 3,
    name: 'Categories',
    to: '/categories',
    subLinks: [
      {id: 4, name: 'Add category', to: '/categories/add'}
    ]
  }
];

const Drawer = ({ isDrawerOpen }) => {
  return (
    <nav
      className={classNames([
        styles.nav,
        isDrawerOpen && styles.navActive
      ])}
    >
      <ul className={styles.list}>
        {/* Drawer header */}
        <DrawerHeader
          name='David Williams'
          post='Art Director'
        />
        {/* Drawer header */}

        {/* Render Links */}
        {links.map(link => (
          <MenuItem
            key={link.id}
            link={link}
          />
        ))}
        {/* Render Links from json */}
      </ul>
    </nav>
  )
};

const DrawerHeader = ({ name, post }) => {
  return (
    <li className={styles.listHeader}>
      <Avatar name={name} />
      <div
        className={classNames([
          'mt-1',
          styles.listHeaderText
        ])}
      >
        { name }
      </div>
      <span className='text-muted'>{ post }</span>
    </li>
  );
};

DrawerHeader.propTypes = {
  name: PropTypes.string.isRequired,
  post: PropTypes.string.isRequired
};

const MenuItem = ({ link }) => {
  const [isDropdownOpen, toggleDropdown] = useState(false);
  const { to, name, subLinks } = link;

  return (
    <li className={styles.listItem}>
      <NavLink
        to={to}
        onClick={event => {
          event.preventDefault();
          toggleDropdown(!isDropdownOpen);
        }}
        activeClassName={styles.current}
      >
        { name }
      </NavLink>
      { subLinks && (
        <ul
          className={classNames([
            styles.subLinks,
            isDropdownOpen && styles.showSubLinks
          ])}
        >
          { subLinks.map(subLink => (
            <li key={subLink.id}>
              <NavLink to={subLink.to}>{ subLink.name }</NavLink>
            </li>
          )) }
        </ul>
      ) }
    </li>
  );
};

DrawerHeader.propTypes = {
  link: PropTypes.shape({
    to: PropTypes.string,
    name: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element
    ]).isRequired,
    subLinks: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        to: PropTypes.string,
        name: PropTypes.oneOfType([
          PropTypes.string,
          PropTypes.element
        ]).isRequired,
      })
    )
  })
};

export default Drawer;
