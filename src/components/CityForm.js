import { createControl } from '../utils/formValidator';

import FormComponent from './FormComponent';

export default class CityForm extends FormComponent {
  constructor(props) {
    super(props);

    this.title = 'Add city';

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
          label: 'Опубиковано',
          type: 'checkbox'
        })
      }
    };
  }

  onFormValid = data => this.props.add(data);
}
