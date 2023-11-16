import * as React from 'react';
import { Link } from 'react-router-dom';
import { ComponentsState, ErrorComponentsState, Menu, Notifications } from 'piral';
import { ErrorInfo } from './components/error-page';
import { DashboardContainer, DashboardTile } from './components/dashboard';
import { MenuContainer, MenuItem } from './components/menu';
import { Footer } from './components/footer';

export const errors: Partial<ErrorComponentsState> = {
  not_found: () => (
    <div>
      <p className="error">Could not find the requested page. Are you sure it exists?</p>
      <p>
        Go back <Link to="/">to the dashboard</Link>.
      </p>
    </div> 
  ),
};

export const layout: Partial<ComponentsState> = {
  ErrorInfo,
  DashboardContainer,
  DashboardTile,
  Layout: ({ children }) => (
    <div>
      <Notifications />
      <Menu type="general" />
      <div className="container">{children}</div>
      <Footer/>
    </div>
  ),
  MenuContainer,
  MenuItem,
  NotificationsHost: ({ children }) => <div className="notifications">{children}</div>,
  NotificationsToast: ({ options, onClose, children }) => (
    <div className={`notification-toast ${options.type}`}>
      <div className="notification-toast-details">
        {options.title && <div className="notification-toast-title">{options.title}</div>}
        <div className="notification-toast-description">{children}</div>
      </div>
      <div className="notification-toast-close" onClick={onClose} />
    </div>
  ),
};
