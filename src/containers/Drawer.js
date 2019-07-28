import { connect } from 'react-redux';

import Drawer from '../components/Drawer';

const mapStateToProps = state => ({
  isDrawerOpen: state.ui.isDrawerOpen
});

export default connect(mapStateToProps)(Drawer);
