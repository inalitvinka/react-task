import { Outlet } from 'react-router';
import { Navigation } from '@components';
import { formLinks } from '@utils';

export const Task1 = () => {
  return (
    <>
      <h2>Task 1: Forms — Controlled & Uncontrolled Components</h2>
      <Navigation links={formLinks} className='mb-5 flex justify-center gap-10' />
      <Outlet />
    </>
  );
};
