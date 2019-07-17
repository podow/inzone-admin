import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import styles from './styles/Card.module.scss';

const Card = ({ title, actions, useBody, footer, children }) => {
    return (
        <div className={styles.card}>
            { title && (
                <div className={classNames([
                    styles.cardHeader,
                    actions && styles.cardHeaderActionsInline
                ])}>
                    { title }
                    { actions && (
                        <div className={styles.cardHeaderActions}>
                            { actions.map((action, index) => (
                                <button key={index} onClick={action.onClick}>{ action.icon }</button>
                            )) }
                        </div>
                    ) }
                </div>
            ) }
            { useBody ? (
                <div className={styles.cardBody}>
                    { children }
                </div>
            ) : children }
            { footer && (
                <div className={styles.cardFooter}>
                    { footer }
                </div>
            ) }
        </div>
    );
};

Card.propTypes = {
    title: PropTypes.element,
    actions: PropTypes.arrayOf(
        PropTypes.shape({
            icon: PropTypes.element.isRequired,
            onClick: PropTypes.func
        })
    ),
    useBody: PropTypes.bool,
    footer: PropTypes.element
};

Card.defaultProps = {
    useBody: true
};

export default Card;