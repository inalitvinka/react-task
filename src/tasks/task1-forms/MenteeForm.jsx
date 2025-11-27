import { useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { Textarea, Button } from '@components';
import { Notification } from '../task2-portals/Notification';

export const MenteeForm = () => {
  const [notification, setNotification] = useState(false);
  const [isValid, setIsValid] = useState(false);

  const questionsRef = useRef();
  const feedbackRef = useRef();
  const submitHandler = event => {
    event.preventDefault();
    if (!feedbackRef.current.value) {
      setIsValid(false);
      setNotification(true);
      return;
    }
    const data = {
      questions: questionsRef.current.value,
      feedback: feedbackRef.current.value,
    };
    console.log(`${JSON.stringify(data, null, 2)}`);
    setIsValid(true);
    setNotification(true);
    event.target.reset();
  };
  const onClose = () => setNotification(false);
  return (
    <>
      <h2>Mentee Form</h2>
      <form action='#' onSubmit={submitHandler} className={`flex flex-col gap-4`}>
        <Textarea id='questions' label='Enter your questions:' ref={questionsRef} />
        <Textarea id='feedback' label='Enter your feedback:' ref={feedbackRef} />
        <Button type='submit' disabled={notification}>
          Submit
        </Button>
      </form>
      {notification &&
        createPortal(
          <Notification onClose={onClose}>
            {isValid ? 'Your data was sent successfully.' : 'Feedback is a required field.'}
          </Notification>,
          document.body,
        )}
    </>
  );
};
