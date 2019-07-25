import React from 'react';
import classNames from 'classnames';

import styles from './styles/FormGroup.module.scss';

function isInvalid({valid, touched, shouldValidate}) {
  return !valid && shouldValidate && touched
}

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
      <input
        type={inputType}
        id={htmlFor}
        value={props.value}
        placeholder={props.placeholder}
        onChange={props.onChange}
      />
      {isInvalid(props) && <span>{props.errorMessage || 'Введите верное значение'}</span>}
    </div>
  )
};

export default FormGroup;
