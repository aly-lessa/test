import { connect } from 'react-redux';
import Components from './Components';
import {
  nextPage,
  setFilter,
  foundUser,
  setFlagProfile,
  openProfile,
  closeProfile
} from './store/actions/action';

const mapStateToProps = (state) => ({
  page: state.page,
  totalPages: state.totalPages,
  users: state.users,
  filter: state.filter,
  profile: state.profile,
  flagProfile: state.flagProfile,
  flagFilter: state.flagFilter
});
const mapDispatchToProps = {
  nextPage,
  setFilter,
  foundUser,
  setFlagProfile,
  openProfile,
  closeProfile
};

export default connect(mapStateToProps, mapDispatchToProps)(Components);
