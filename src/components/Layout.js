import React, { useState } from 'react';
import classNames from 'classnames';

import styles from './styles/Layout.module.scss'

import Button from './Button'
import Drawer from './Drawer';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
    const [isOpen, toggleMenu] = useState(true);

    return (
        <div className={styles.wrapper}>
            {/* NAV */}
            <Drawer isOpen={isOpen} />
            {/* NAV */}

            <main
                className={classNames([
                    styles.main,
                    !isOpen && styles.mainFull
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
                        { title: 'Home', to: '/', },
                        { title: 'Layout', to: '/layout', isCurrent: true }
                    ]}
                    isOpen={isOpen}
                    toggleMenu={toggleMenu}
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

Layout.propTypes = {};

Layout.defaultProps = {};

export default Layout;