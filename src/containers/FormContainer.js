import React, { PureComponent } from 'react';

import { validate } from '../utils/formValidator';

import FormGroup from '../components/FormGroup';
import Button from '../components/Button';
import Card from '../components/Card';

export default class FormComponent extends PureComponent {
  onChangeHandler = (event, controlName) => {
    if (!this.state.formControls) {
      throw new TypeError('form state must be defined');
    }

    const formControls = { ...this.state.formControls };
    const control = { ...formControls[controlName] };

    control.value = event.target.value || event.target.checked;
    control.touched = true;
    control.valid = validate(control.value, control.validation);

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

  submitHandler = event => {
    event.preventDefault();

    if (!this.state.formControls) {
      throw new TypeError('form state must be defined');
    }

    let data = {};

    Object.keys(this.state.formControls).map(controlName => {
      const control = this.state.formControls[controlName];
      return data[controlName] = control.value;
    });

    if (this.onSubmit !== undefined) {
      this.onSubmit();
    }

    if (this.state.isFormValid) {
      if (this.onFormValid !== undefined) {
        this.onFormValid(data);
      }
    } else {
      if (this.onFormInvalid !== undefined) {
        this.onFormInvalid();
      }
    }
  };

  renderControls() {
    if (!this.state.formControls) {
      throw new TypeError('form state must be defined');
    }

    return Object.keys(this.state.formControls).map((controlName, index) => {
      const control = this.state.formControls[controlName];

      return (
        <FormGroup
          key={controlName + index}
          placeholder={control.placeholder}
          label={control.label}
          value={control.value}
          // valid={control.valid}
          // shouldvalidate={!!control.validation}
          // touched={control.touched}
          type={control.type}
          errormessage={control.errorMessage}
          onChange={event => this.onChangeHandler(event, controlName)}
        />
      )
    })
  }

  render() {
    return (
      <Card title={ this.title && <h5>{ this.title }</h5> }>
        <form onSubmit={this.submitHandler} style={{ textAlign: 'right' }}>
          { this.renderControls() }
          <Button type='submit'>{ this.buttonLabel || 'Save' }</Button>
        </form>
      </Card>
    );
  }
}
