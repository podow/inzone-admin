import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import styles from './styles/FormGroup.module.scss';

const isInvalid = ({valid, touched, shouldvalidate}) => {
  return !valid && shouldvalidate && touched
};

const FormGroup = (props) => {
  const inputType = props.type || 'text';
  const htmlFor = props.htmlFor || `${inputType}-${Math.random()}`;

  return (
    <div
      className={classNames([
        styles.input,
        isInvalid(props) && styles.invalid
      ])}
    >
      <label htmlFor={htmlFor}>
        { props.label }
      </label>
      <input
        type={inputType}
        id={htmlFor}
        value={props.value}
        placeholder={props.placeholder}
        onChange={props.onChange}
        { ...props }
      />
      { isInvalid(props) && <span>{props.errormessage || 'Введите верное значение'}</span> }
    </div>
  )
};

FormGroup.propTypes = {
  type: PropTypes.string,
  htmlFor: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool
  ]),
  label: PropTypes.string,
  placeholder: PropTypes.string,
  errormessage: PropTypes.string,
  onChange: PropTypes.func,
  valid: PropTypes.bool,
  shouldvalidate: PropTypes.bool,
  touched: PropTypes.bool
};

export default FormGroup;
