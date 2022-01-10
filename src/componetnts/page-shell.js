import { Navbar } from './navbar/navbar';
import { Outlet } from 'react-router-dom';

export const PageShell = () => {
  return (
    <div className="Page">
      <Navbar />

      <Outlet />
    </div>
  );
};
