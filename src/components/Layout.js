import React  from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import styles from './styles/Layout.module.scss'

import Header from '../containers/Header';
import Drawer from '../containers/Drawer';
import Footer from './Footer';

import Button from './Button'

const Layout = ({ isDrawerOpen, children }) => {
  return (
    <div className={styles.wrapper}>
      {/* NAV */}
      <Drawer />
      {/* NAV */}

      <main
        className={classNames([
          styles.main,
          !isDrawerOpen && styles.mainFull
        ])}
      >
        {/* Header */}
        <Header
          title='Layout'
          actions={[
            <span>123</span>,
            <Button>zxc</Button>
          ]}
          breadcrumbs={[
            { title: 'Home', url: '/' },
            { title: 'Layout', url: '/layout', isCurrent: true }
          ]}
        />
        {/* Header */}

        {/* Main */}
        <section className={classNames([
          'container-fluid',
          'py-3'
        ])}>
          { children }
        </section>
        {/* Main */}

        {/* Footer */}
        <Footer />
        {/* Footer */}
      </main>
    </div>
  );
};

Layout.propTypes = {
  title: PropTypes.string,
  breadcrumbs: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    url: PropTypes.string,
    isCurrent: PropTypes.bool
  }))
};

Layout.defaultProps = {};

export default Layout;
