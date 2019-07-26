import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import styles from './styles/Header.module.scss';

import Burger from './Burger';
import Icon from './Icon';

const Header = ({title, breadcrumbs, actions, isOpen, toggleMenu, logout}) => (
  <header className='mt-3'>
    <div className={classNames([
      'container-fluid',
      'mb-3',
      styles.top
    ])}>
      <Burger onClick={() => { toggleMenu(!isOpen) }}/>
      <span className={styles.logout} onClick={logout}>
        <Icon icon='sign-out' size='lg'/> Log out
      </span>
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
              <ol className={styles.breadcrumbs}>
                { breadcrumbs.map((crumb, index) => {
                  if (crumb.isCurrent) {
                    return <li key={index}><strong>{ crumb.title }</strong></li>;
                  }

                  return (
                    <li key={index}>
                      <NavLink to={crumb.url}>{ crumb.title }</NavLink>
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
  actions: PropTypes.arrayOf(PropTypes.element),
  breadcrumbs: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string,
      isCurrent: PropTypes.bool
    })
  )
};

export default Header;
