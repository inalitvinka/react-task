import { createPortal } from 'react-dom';
import { useState } from 'react';
import { Button } from '@components';
import { Notification } from './Notification';

export const TaskDeadline = () => {
  const [showNotification, setShowNotification] = useState(false);

  const onClose = () => setShowNotification(false);
  const deadlineHandler = () => setShowNotification(true);

  return (
    <>
      <p>Click the button below to see the deadline for this task</p>
      <Button onClick={deadlineHandler} disabled={showNotification}>
        Show Deadline
      </Button>
      {showNotification &&
        createPortal(
          <Notification onClose={onClose}>Deadline is 2025-11-28</Notification>,
          document.body,
        )}
    </>
  );
};
