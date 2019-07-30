import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import is from 'is_js';

import { auth } from '../actions/auth';

import styles from './styles/LoginPage.module.scss'

import FormGroup from '../components/FormGroup'
import Button from '../components/Button'

class LoginPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isFormValid: false,
      formControls: {
        email: {
          value: '',
          type: 'email',
          placeholder: 'Email',
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
          placeholder: 'Пароль',
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
        <FormGroup
          className={styles.input}
          key={controlName + index}
          type={control.type}
          value={control.value}
          valid={control.valid}
          touched={control.touched}
          placeholder={control.placeholder}
          errorMessage={control.errorMessage}
          shouldValidate={!!control.validation}
          onChange={event => this.onChangeHandler(event, controlName)}
        />
      )
    });
  }

  submitHandler = (event) => {
    event.preventDefault();

    const { email, password } = this.state.formControls;

    if (this.state.isFormValid) {
      this.props.auth(email.value, password.value);
    }
  };

  render() {
    const { isAuthenticated } = this.props;
    return isAuthenticated ? (
      <Redirect to='/cities' />
    ) : (
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

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

const mapDispatchToProps = dispatch => ({
  auth: (email, password) => dispatch(auth(email, password))
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
