import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import styles from './styles/FormGroup.module.scss';

const FormGroup = (props) => {
  const inputType = props.type || 'text';
  const htmlFor = props.htmlFor || `${inputType}-${Math.random()}`;

  const isInvalid = ({valid, touched, shouldValidate}) => {
    return !valid && shouldValidate && touched
  };

  return (
    <div
      className={classNames([
        styles.input,
        isInvalid(props) && styles.invalid
      ])}
    >
      <input
        type={inputType}
        id={htmlFor}
        value={props.value}
        placeholder={props.placeholder}
        onChange={props.onChange}
        { ...props }
      />
      { isInvalid(props) && <span>{props.errorMessage || 'Введите верное значение'}</span> }
    </div>
  )
};

FormGroup.propTypes = {
  type: PropTypes.string,
  htmlFor: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  errorMessage: PropTypes.string,
  onChange: PropTypes.func,
  valid: PropTypes.bool,
  shouldValidate: PropTypes.bool,
  touched: PropTypes.bool
};

export default FormGroup;
