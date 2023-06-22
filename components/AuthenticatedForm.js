import React from 'react';

const AuthenticatedForm = ({ user }) => {
  return (
    <div>
    <h1>Account Information</h1>
      <p>Name: {user.name}!</p>
      <p>Email: {user.email}</p>
      <p>Password: {user.password}</p>
    </div>
  );
};

export default AuthenticatedForm;
