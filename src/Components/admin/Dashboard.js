import React, { Component } from 'react';
import AdminLayout from '../../Hoc/AdminLayout';

export default class Dashboard extends Component {
  render() {
    return (
      <AdminLayout>
        <div className="user_dashboard">
          <div>This is your dashboard</div>
        </div>
      </AdminLayout>
    );
  }
}
