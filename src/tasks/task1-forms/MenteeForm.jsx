import { useRef } from 'react';
import { Textarea, Button } from '@components';

export const MenteeForm = () => {
  const questionsRef = useRef();
  const feedbackRef = useRef();
  const submitHandler = event => {
    event.preventDefault();
    if (!feedbackRef.current.value) {
      alert('Feedback is a required field.');
      return;
    }
    const data = {
      questions: questionsRef.current.value,
      feedback: feedbackRef.current.value,
    };
    console.log(`${JSON.stringify(data, null, 2)}`);
    alert('Your data was sent successfully.');
    event.target.reset();
  };
  return (
    <>
      <h2>Mentee Form</h2>
      <form action='#' onSubmit={submitHandler} className={`flex flex-col gap-4`}>
        <Textarea id='questions' label='Enter your questions:' ref={questionsRef} />
        <Textarea id='feedback' label='Enter your feedback:' ref={feedbackRef} />
        <Button type='submit'>Submit</Button>
      </form>
    </>
  );
};
