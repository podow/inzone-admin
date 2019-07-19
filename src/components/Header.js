import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import styles from './styles/Header.module.scss';

import Burger from './Burger';

const Header = ({ title, breadcrumbs, actions, isOpen, toggleMenu }) => (
    <header
        className={classNames([
            'mt-3'
        ])}>
        <div className={classNames([
            'container-fluid',
            'mb-3'
        ])}>
            <Burger onClick={() => { toggleMenu(!isOpen) }} />
        </div>
        <div
            className={classNames([
                styles.headerText,
                'container-fluid'
            ])}
        >
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-10'>
                        <h1>{ title }</h1>
                        { breadcrumbs && (
                            <ol
                                className={classNames([
                                    styles.breadcrumbs
                                ])}
                            >
                                { breadcrumbs.map((crumb, index) => {
                                    if (crumb.isCurrent) {
                                        return <li key={index}><strong>{ crumb.title }</strong></li>;
                                    }
                                    return (
                                        <li key={index}>
                                            <NavLink to={crumb.to}>
                                                { crumb.title }
                                            </NavLink>
                                        </li>
                                    );
                                }) }
                            </ol>
                        ) }
                    </div>
                    { actions && (
                        <div className='col-2'>
                            { actions.map((action, index) => (
                                <Fragment key={index}>
                                    { action }
                                </Fragment>
                            )) }
                        </div>
                    ) }
                </div>
            </div>
        </div>
    </header>
);

Header.propTypes = {
    title: PropTypes.string,
    actions: PropTypes.arrayOf(
        PropTypes.element
    ),
    breadcrumbs: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            to: PropTypes.string,
            isCurrent: PropTypes.bool
        })
    )
};

export default Header;