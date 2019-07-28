import { createControl } from '../utils/formValidator';

import FormContainer from '../containers/FormContainer';

export default class CityForm extends FormContainer {
  constructor(props) {
    super(props);

    this.title = 'Добавить город';
    this.buttonLabel = 'Сохранить';

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
