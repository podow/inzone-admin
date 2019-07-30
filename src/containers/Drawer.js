import { connect } from 'react-redux';

import Drawer from '../components/Drawer';

const mapStateToProps = state => ({
  user: state.auth.user,
  isDrawerOpen: state.ui.isDrawerOpen
});

export default connect(mapStateToProps)(Drawer);
