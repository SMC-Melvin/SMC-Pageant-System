import React from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

const UserModal = ({
  user,
  roles,
  isShowUserModal,
  onShowUserModal,
  onFormChange,
  onSaveUser
}) => {
  return (
    <Modal show={isShowUserModal} onHide={onShowUserModal}>
      <Modal.Header closeButton>
        <Modal.Title>Add User</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <input
          type="text"
          placeholder="Full Name"
          className="form-control textbox"
          name="name"
          value={user.name}
          onChange={onFormChange}
        />
        <input
          type="text"
          placeholder="Username"
          className="form-control textbox"
          name="username"
          value={user.username}
          onChange={onFormChange}
        />
        <input
          type="password"
          placeholder="Password"
          className="form-control textbox"
          name="password"
          value={user.password}
          onChange={onFormChange}
        />
        <Form.Control
          name="roleId"
          value={user.roleId}
          onChange={onFormChange}
          as="select"
          className="textbox"
        >
          {roles.map(role => (
            <option key={role.id} value={role.id}>
              {role.name}
            </option>
          ))}
        </Form.Control>
      </Modal.Body>
      <Modal.Footer>
        <button className="btn btn-clear" onClick={onShowUserModal}>
          Cancel
        </button>
        <button type="button" className="btn btn-save" onClick={onSaveUser}>
          SAVE
        </button>
      </Modal.Footer>
    </Modal>
  );
};

export default UserModal;
