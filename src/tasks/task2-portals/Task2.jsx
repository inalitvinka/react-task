import { TaskDeadline } from './TaskDeadline';
import { Navigation } from '@components';

const portalsLinks = [{ to: '/', text: 'Home' }];

export const Task2 = () => {
  return (
    <main>
      <h2>Task 2: Portals — Notifications</h2>
      <Navigation links={portalsLinks} />
      <TaskDeadline />
    </main>
  );
};
