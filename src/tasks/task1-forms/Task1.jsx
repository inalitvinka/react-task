import { Outlet } from 'react-router';
import { Navigation } from '@components';

const formLinks = [
  { to: '/', text: 'Home' },
  { to: 'mentor', text: 'Mentor' },
  { to: 'mentee', text: 'Mentee' },
];

export const Task1 = () => {
  return (
    <>
      <h2>Task 1: Forms — Controlled & Uncontrolled Components</h2>
      <Navigation links={formLinks} className='mb-5 flex justify-center gap-10' />
      <Outlet />
    </>
  );
};
