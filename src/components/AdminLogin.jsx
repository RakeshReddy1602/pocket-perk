import React from 'react';
import '../css/AdminLogin.css';

function AdminLogin() {
  return (
    <div className="container">
      <h2>Admin Login</h2>
      <form>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" />
        </div>
        <div className="form-group">
          <input type="submit" value="Login" />
        </div>
      </form>
    </div>
  );
}

export default AdminLogin;
