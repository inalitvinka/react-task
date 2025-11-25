import { Outlet } from 'react-router';
import { FormNavbar } from '@components';

export const Task1 = () => {
  return (
    <>
      <h2>Task 1: Forms — Controlled & Uncontrolled Components</h2>
      <FormNavbar />
      <Outlet />
    </>
  );
};
