import { Navigation } from '@components';
import { homeLink } from '@utils';
import { BuggyButton } from './BuggyButton';

export const Task4 = () => {
  return (
    <main>
      <h2>Task 4: Error Boundary</h2>
      <Navigation links={homeLink} />
      <BuggyButton />
    </main>
  );
};
