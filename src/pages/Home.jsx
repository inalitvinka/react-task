import { Navigation } from '@components';
import { navLinks } from '@utils';

export const Home = () => {
  return (
    <>
      <h1>React Tasks</h1>
      <Navigation
        links={navLinks}
        className='mt-8 w-full flex flex-col gap-4 text-2xl text-center'
      />
    </>
  );
};
