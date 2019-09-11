import React, { Component } from 'react';

import accountService from '../../services/accoutService';

import edit from '../../assets/images/svg/edit.svg';
import trash from '../../assets/images/svg/trash.svg';

import './index.scss';
import UserModal from './user-modal.component';
import SweetAlert from 'sweetalert2-react';
import { userBuilderForAPI } from '../../mappers/accout.mapper';

class UserPage extends Component {
  state = {
    users: [],
    isShowUserModal: false,
    isShowUserErrorAlert: false,
    roles: [
      {
        id: 1,
        name: 'Administrator'
      },
      {
        id: 3,
        name: 'Judge For Male'
      },
      {
        id: 4,
        name: 'Judge For Female'
      }
    ],
    user: {
      id: 0,
      name: '',
      username: '',
      password: '',
      roleId: 3
    }
  };
  async componentDidMount() {
    try {
      const { data: users } = await accountService.getAccount();
      this.setState({ users });
    } catch (error) {}
  }
  handleShowUserModal = () => {
    const user = {
      id: 0,
      name: '',
      username: '',
      password: '',
      roleId: 3
    };
    const { isShowUserModal } = this.state;
    this.setState({ isShowUserModal: !isShowUserModal, user: { ...user } });
  };
  handleFormChange = ({ target }) => {
    const { value, name } = target;
    const { user } = this.state;
    this.setState({ user: { ...user, [name]: value } });
  };
  handleSaveUser = async () => {
    const { user, roles } = this.state;
    try {
      const { data } = await accountService.setAccount(user);
      const newUser = userBuilderForAPI(user);
      newUser.Id = data;
      newUser.Role = roles.find(role => role.id === parseInt(user.roleId)).name;
      const { users } = this.state;
      this.setState({ users: [...users, newUser], isShowUserModal: false });
    } catch (error) {
      this.setState({ isShowUserErrorAlert: true });
    }
  };
  render() {
    const { isShowUserModal, roles, user } = this.state;
    return (
      <div className="container">
        <table className="table table-hover">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Username</th>
              <th>Role</th>
              <th />
              <th />
            </tr>
          </thead>
          <tbody>
            {this.state.users.map(user => (
              <tr key={user.Id}>
                <td>{user.Id}</td>
                <td>{user.Name}</td>
                <td>{user.Username}</td>
                <td>{user.Role}</td>
                <td width="10px" className="padding-edit">
                  <img
                    src={edit}
                    alt=""
                    width="15px"
                    height="15px"
                    className="cursor"
                  />
                </td>
                <td width="10px" className="padding-edit">
                  <img
                    src={trash}
                    alt=""
                    width="15px"
                    height="15px"
                    className="cursor"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <button
          type="button"
          className="btn btn-add"
          onClick={this.handleShowUserModal}
        >
          Add Judge
        </button>

        <UserModal
          user={user}
          roles={roles}
          isShowUserModal={isShowUserModal}
          onShowUserModal={this.handleShowUserModal}
          onFormChange={this.handleFormChange}
          onSaveUser={this.handleSaveUser}
        />
        <SweetAlert
          show={this.state.isShowUserErrorAlert}
          type="error"
          title="Saving user failed"
          text="There was an error while saving this user. Please try again."
          onConfirm={() => this.setState({ isShowUserErrorAlert: false })}
        />
      </div>
    );
  }
}

export default UserPage;
