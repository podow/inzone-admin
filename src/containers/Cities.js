import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getList } from '../actions/city';

import Cities from '../components/Cities';

const mapStateToProps = state => ({
  cities: state.city
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getList
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cities);
