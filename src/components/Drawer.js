import React, { useState } from 'react'
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

import styles from './styles/Drawer.module.scss';

import Avatar from './Avatar';

const links = [
    {
        id: 1,
        name: 'Cities',
        to: '/',
        subLinks: [
            { id: 2, name: 'Add city', to: '/cities/add' }
        ]
    },
    {
        id: 3,
        name: 'Categories',
        to: '/categories',
        subLinks: [
            { id: 4, name: 'Add category', to: '/categories/add' }
        ]
    }
];

const Drawer = ({ isOpen }) => {
    const [isDropdownOpen, toggleDropdown] = useState(false);

    return (
        <nav
            className={classNames([
                styles.nav,
                isOpen && styles.navActive
            ])}
        >
            <ul className={styles.list}>

                {/* Drawer header */}
                <li className={styles.listHeader}>
                    <Avatar name='David Williams'/>
                    <div
                        className={classNames([
                            'mt-1',
                            styles.listHeaderText
                        ])}
                    >
                        David Williams
                    </div>
                    <span
                        className={classNames([
                            'text-muted'
                        ])}
                    >
                        Art Director
                    </span>
                </li>
                {/* Drawer header */}

                {/* Render Links from json */}
                { links.map(link => (
                    <li
                        key={link.id}
                        className={styles.listItem}
                    >
                        <NavLink
                            to={link.to}
                            onClick={event => {
                                event.preventDefault();
                                toggleDropdown(!isDropdownOpen);
                            }}
                            activeClassName={styles.current}
                        >
                            { link.name }
                        </NavLink>
                        { link.subLinks && (
                            <ul
                                className={classNames([
                                    styles.subLinks,
                                    !isDropdownOpen && styles.hiddenSubLinks
                                ])}
                            >
                                { link.subLinks.map(subLink => (
                                    <li key={subLink.id}>
                                        <NavLink to={subLink.to}>{ subLink.name }</NavLink>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                )) }
                {/* Render Links from json */}
            </ul>
        </nav>
    )
};

export default Drawer;