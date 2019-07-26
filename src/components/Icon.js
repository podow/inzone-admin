import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const Icon = ({ icon, size, rotate, flip, animate}) => (
  <span className={classNames([
    'fa',
    `fa-${icon}`,
    size && `fa-${size}`,
    rotate ? `fa-rotate-${rotate}` : (flip && `fa-flip-${flip}`),
    animate && `fa-${animate}`
  ])} />
);

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  size: PropTypes.string,
  rotate: PropTypes.string,
  flip: PropTypes.string,
  animate: PropTypes.string
};

export default Icon;
