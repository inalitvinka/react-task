import { Outlet } from 'react-router';
import { Navigation } from '@components';

const linksTask3 = [
  { to: '/', text: 'Home' },
  { to: 'pagination', text: 'Pagination' },
  { to: 'virtualization', text: 'Virtualization' },
];

export const Task3 = () => {
  return (
    <main>
      <h2>Task 3: Pagination & Virtualization</h2>
      <Navigation links={linksTask3} className='mb-5 flex justify-center gap-10' />
      <Outlet />
    </main>
  );
};
