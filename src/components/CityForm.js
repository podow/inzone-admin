import React, { Component } from 'react';

import { createControl, validate } from '../utils/formValidator';

import Card from './Card';
import FormGroup from './FormGroup';
import Button from './Button';

export default class CityForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isFormValid: false,
      formControls: {
        name: createControl({
          placeholder: 'Город'
        }, { required: true }),
        country: createControl({
          placeholder: 'Страна'
        }, { required: true }),
        published: createControl({
          placeholder: 'Опубиковано',
          type: 'checkbox'
        })
      }
    };
  }

  onChangeHandler = (event, controlName) => {
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

  renderControls() {
    return Object.keys(this.state.formControls).map((controlName, index) => {
      const control = this.state.formControls[controlName];

      return (
        <FormGroup
          key={controlName + index}
          placeholder={control.placeholder}
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

  submitHandler = event => {
    event.preventDefault();

    const { name, country, published } = this.state.formControls;

    if (this.state.isFormValid) {
      this.props.add({ name: name.value, country: country.value, published: published.value });
    }
  };

  render() {
    return (
      <Card title={<h5>Add city</h5>}>
        <form onSubmit={this.submitHandler} style={{ textAlign: 'right' }}>
          { this.renderControls() }
          <Button type='submit'>Save</Button>
        </form>
      </Card>
    );
  }
}
