import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prefer-stateless-function
export default class User extends React.Component {
  constructor(props) {
    super(props);
    this.onClickUser = this.onClickUser.bind(this);
  }

  onClickUser() {
    const { id, openProfile } = this.props;
    openProfile(id);
  }

  render() {
    const {
      avatar, email, firstName, lastName, idLi, selection
    } = this.props;
    const nameClass = 'user user_' + idLi;
    return (
      // eslint-disable-next-line jsx-a11y/no-static-element-interactions
      <div
        key={idLi}
        className={nameClass}
        data-visible={selection}
        onClick={this.onClickUser}
      >
        <div className="avatar">
          {/* eslint-disable-next-line jsx-a11y/alt-text */}
          <img src={avatar} />
        </div>
        <div className="contacts">
          <div className="name">{firstName + ' ' + lastName}</div>
          <div className="email">{email}</div>
        </div>
      </div>
    );
  }
}

User.propTypes = {
  avatar: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  lastName: PropTypes.string.isRequired,
  idLi: PropTypes.number.isRequired,
  selection: PropTypes.bool.isRequired,
  openProfile: PropTypes.func.isRequired
};
