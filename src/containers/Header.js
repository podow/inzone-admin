import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { logout } from '../actions/auth';
import { toggleDrawer } from '../actions/ui';
import Header from '../components/Header';

const mapStateToProps = state => ({
  isDrawerOpen: state.ui.isDrawerOpen
});

const mapDispatchToProps = dispatch => bindActionCreators({
  logout,
  toggleDrawer
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Header);
