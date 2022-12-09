import { Outlet } from 'react-router-dom';

import './Layout.scss';

/**
 * Please do not adjust this component,
 */
const Layout = ({ children }) => {
  return (
    <>
      {children}
      <Outlet />
    </>
  );
};

export default Layout;
