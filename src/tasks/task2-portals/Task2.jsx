import { TaskDeadline } from './TaskDeadline';
import { Navigation } from '@components';
import { homeLink } from '@utils';

export const Task2 = () => {
  return (
    <main>
      <h2>Task 2: Portals — Notifications</h2>
      <Navigation links={homeLink} />
      <TaskDeadline />
    </main>
  );
};
