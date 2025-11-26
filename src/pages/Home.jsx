import { Navigation } from '@components';

const links = [
  { to: '/task1', text: 'Task 1: Forms' },
  { to: '/task2', text: 'Task 2: Portals' },
  { to: '/task3', text: 'Task 3: Pagination & Virtualization' },
];

export const Home = () => {
  return (
    <>
      <h1>React Tasks</h1>
      <Navigation links={links} className='mt-8 w-full flex flex-col gap-4 text-2xl text-center' />
    </>
  );
};
