import React from 'react';
import PropTypes from 'prop-types';
import Profile from './components/Profile';
import User from './components/User';

// eslint-disable-next-line react/prefer-stateless-function
export default class Components extends React.Component {
  constructor(props) {
    super(props);
    this.createListPages = this.createListPages.bind(this);
    this.createListUsers = this.createListUsers.bind(this);
    this.changeFilter = this.changeFilter.bind(this);
  }

  changeFilter = (e) => {
    const { foundUser } = this.props;
    const text = e.target.value;
    foundUser(text);
  }


  createListPages() {
    const {
      page, totalPages
    } = this.props;
    const list = [];
    for (let i = 0; i < totalPages; i += 1) {
      const currentPage = (i + 1) === page ? 'active' : '';
      const name = 'page_' + i + ' ' + currentPage;
      list.push(<div key={i} className={name} />);
    }
    return list;
  }

  createListUsers() {
    const {
      users, openProfile, flagFilter, filter
    } = this.props;
    const list = [];
    users.forEach((item, i) => {
      const key = i;
      const selection = ((flagFilter && item.email === filter) || !flagFilter);
      list.push(
        <User
          key={key}
          id={item.id}
          avatar={item.avatar}
          email={item.email}
          firstName={item.first_name}
          lastName={item.last_name}
          idLi={key}
          openProfile={openProfile}
          selection={selection}
        />
      );
    });
    return list;
  }


  render() {
    const {
      nextPage, filter, profile, flagProfile, closeProfile
    } = this.props;
    return (
      <div className="main">
        <div className="filter">
          <input value={filter} type="text" onChange={this.changeFilter} />
        </div>
        <div className="users">
          {this.createListUsers()}
        </div>
        <Profile
          id={profile.id}
          avatar={profile.avatar}
          firstName={profile.first_name}
          lastName={profile.last_name}
          email={profile.email}
          company={profile.company}
          url={profile.url}
          text={profile.text}
          flagProfile={flagProfile}
          closeProfile={closeProfile}
        />
        <div className="pages">{this.createListPages()}</div>
        {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
        <div className="button_next" onClick={nextPage}>next page</div>
      </div>
    );
  }
}

Components.propTypes = {
  page: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  users: PropTypes.arrayOf(PropTypes.object).isRequired,
  nextPage: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
  foundUser: PropTypes.func.isRequired,
  profile: PropTypes.shape({
    avatar: PropTypes.string,
    email: PropTypes.string,
    first_name: PropTypes.string,
    id: PropTypes.number,
    last_name: PropTypes.string,
    company: PropTypes.string,
    url: PropTypes.string,
    text: PropTypes.string
  }).isRequired,
  flagFilter: PropTypes.bool.isRequired,
  flagProfile: PropTypes.bool.isRequired,
  openProfile: PropTypes.func.isRequired,
  closeProfile: PropTypes.func.isRequired
};
