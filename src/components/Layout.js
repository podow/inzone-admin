import React, { useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import styles from './styles/Layout.module.scss'

import Button from './Button'
import Drawer from './Drawer';

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
                <header
                    className={classNames([
                        'mt-3'
                    ])}>
                    <div className={classNames([
                        'container-fluid',
                        'mb-3'
                    ])}>
                        <Button onClick={() => { toggleMenu(!isOpen) }}>
                            <span className={classNames([styles.pan, isOpen && styles.panActive])} />
                            <span className={classNames([styles.pan, isOpen && styles.panActive])} />
                            <span className={classNames([styles.pan, isOpen && styles.panActive])} />
                        </Button>
                    </div>
                    <div
                        className={classNames([
                            styles.headerText,
                            'container-fluid'
                        ])}
                    >
                        <div className='row'>
                            <div className='col-10'>
                                <h1>Layouts</h1>
                                <ol
                                    className={classNames([
                                        styles.breadcrumbs
                                    ])}
                                >
                                    <li>Home</li>
                                    <li><strong>Layouts</strong></li>
                                </ol>
                            </div>
                            <div className='col-2'>
                                123
                            </div>
                        </div>
                    </div>
                </header>
                <section className='container-fluid'>
                    { children }
                </section>
                <footer
                    className={classNames([
                        styles.footer
                    ])}
                >
                    <strong>Copyright</strong> InZone © 2014-2018
                </footer>
            </main>
        </div>
    );
};

Layout.propTypes = {};

Layout.defaultProps = {};

export default Layout;