import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { logout } from '../actions/auth';
import Header from '../components/Header';

const mapDispatchToProps = dispatch => bindActionCreators({
  logout
}, dispatch);

export default connect(null, mapDispatchToProps)(Header);
