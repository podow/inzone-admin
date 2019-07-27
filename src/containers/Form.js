import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { add } from '../actions/city';
import CityForm from '../components/CityForm';

const mapDispatchToProps = dispatch => bindActionCreators({
  add
}, dispatch);

export default connect(null, mapDispatchToProps)(CityForm);
