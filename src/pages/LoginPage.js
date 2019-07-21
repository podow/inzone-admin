import React, { Component } from 'react';
import is from 'is_js'
import axios from 'axios';

import styles from './styles/LoginPage.module.scss'

import Input from '../components/Input'
import Button from '../components/Button'

export default class LoginPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isFormValid: false,
      formControls: {
        email: {
          value: '',
          type: 'email',
          label: 'Email',
          errorMessage: 'Введите корректный e-mail',
          valid: false,
          touched: false,
          validation: {
            required: true,
            email: true
          }
        },
        password: {
          value: '',
          type: 'password',
          label: 'Пароль',
          errorMessage: 'Введите корректный пароль',
          valid: false,
          touched: false,
          validation: {
            required: true,
            minLength: 6
          }
        }
      }
    };
  }

  validateControl = (value, validation) => {
    if (!validation) {
      return true
    }

    let isValid = true;

    if (validation.required) {
      isValid = value.trim() !== '' && isValid;
    }

    if (validation.email) {
      isValid = is.email(value) && isValid;
    }

    if (validation.minLength) {
      isValid = value.trim().length >= validation.minLength && isValid;
    }

    return isValid;
  };

  onChangeHandler = (event, controlName) => {
    const formControls = { ...this.state.formControls };
    const control = { ...formControls[controlName] };

    control.value = event.target.value;
    control.touched = true;
    control.valid = this.validateControl(control.value, control.validation);

    formControls[controlName] = control;

    let isFormValid = true;

    Object.keys(formControls).forEach(name => {
      isFormValid = formControls[name].valid && isFormValid
    });

    this.setState({
      formControls,
      isFormValid
    })
  };

  renderInputs() {
    return Object.keys(this.state.formControls).map((controlName, index) => {
      const control = this.state.formControls[controlName];
      return (
        <Input
          className={styles.input}
          key={controlName + index}
          type={control.type}
          value={control.value}
          valid={control.valid}
          touched={control.touched}
          label={control.label}
          placeholder={control.label}
          errorMessage={control.errorMessage}
          shouldValidate={!!control.validation}
          onChange={event => this.onChangeHandler(event, controlName)}
        />
      )
    });
  }

  submitHandler = async (event) => {
    event.preventDefault();

    if (this.state.isFormValid) {
      const res = await axios({
        method: 'POST',
        url: 'https://inzone-api.herokuapp.com/api/v1/users/login',
        headers: {
          ContentType: 'application/json'
        },
        data: {
          email: this.state.formControls.email.value,
          hash: this.state.formControls.password.value
        }
      });

      const { user: { token } } = res.data;

      localStorage.setItem('token', token);
    }
  };

  render() {
    return (
      <div className={styles.wrapper}>
        <h3><span className={styles.brandName}>INZONE</span> Admin panel login</h3>
        <form onSubmit={this.submitHandler}>
          { this.renderInputs() }
          <Button type='submit' className={styles.button}>Submit</Button>
        </form>
      </div>
    );
  }
}
