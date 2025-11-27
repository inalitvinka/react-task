import { useState } from 'react';
import { createPortal } from 'react-dom';
import { Input, Textarea, Fieldset, Button, FieldError } from '@components';
import { grade, initFormState, minCommentsLength, errorMsg } from '@utils';
import { Notification } from '../task2-portals/Notification';

export const MentorForm = () => {
  const [formData, setFormData] = useState(initFormState);
  const [errors, setErrors] = useState({});
  const [notification, setNotification] = useState(false);

  const formValidator = () => {
    const errors = {};
    if (!formData.dialogue) errors.dialogue = errorMsg.dialogue;
    if (!formData.confidence) errors.confidence = errorMsg.confidence;
    if (!formData.comments || formData.comments < minCommentsLength)
      errors.comments = errorMsg.comments;
    return errors;
  };

  const changeHandler = event => {
    const { name, value } = event.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
    setErrors(prevErrors => {
      const updated = { ...prevErrors };
      if (name === 'dialogue' && value) delete updated.dialogue;
      if (name === 'confidence' && value) delete updated.confidence;
      if (name === 'comments' && value.length >= minCommentsLength) delete updated.comments;
      return updated;
    });
  };

  const submitHandler = event => {
    event.preventDefault();
    const validationResult = formValidator();
    if (Object.keys(validationResult).length) {
      setErrors(validationResult);
      return;
    }
    setNotification(true);
    setFormData(initFormState);
    setErrors({});
  };

  const onClose = () => setNotification(false);

  return (
    <>
      <h2>Mentor Form</h2>
      <form action='#' onSubmit={submitHandler} className={`flex flex-col gap-3`}>
        <Fieldset legend='Dialogue management:' className='flex-row justify-between'>
          {grade.map(num => (
            <Input
              type='radio'
              name='dialogue'
              value={num}
              key={num}
              label={num}
              id={`dialogue-${num}`}
              onChange={changeHandler}
              checked={formData.dialogue === num}
              labelClass={'flex flex-row-reverse gap-2'}
            />
          ))}
          {errors.dialogue && <FieldError message={errors.dialogue} />}
        </Fieldset>
        <Fieldset legend='Confidence in answers:' className='flex-row justify-between'>
          {grade.map(num => (
            <Input
              type='radio'
              name='confidence'
              value={num}
              key={num}
              label={num}
              id={`confidence-${num}`}
              onChange={changeHandler}
              checked={formData.confidence === num}
              labelClass={'flex flex-row-reverse gap-2'}
            />
          ))}
          {errors.confidence && <FieldError message={errors.confidence} />}
        </Fieldset>
        <Fieldset legend='Technical Comments:'>
          <Textarea
            id='comments'
            placeholder='notes / strengths / weak points'
            name='comments'
            onChange={changeHandler}
            value={formData.comments}
          />
          {errors.comments && <FieldError message={errors.comments} />}
        </Fieldset>
        <Fieldset legend='Recommendations:'>
          <Textarea
            id='links'
            name='links'
            onChange={changeHandler}
            placeholder='links to resources'
            value={formData.links}
          />
          <Textarea
            id='topicsToImprove'
            name='topicsToImprove'
            onChange={changeHandler}
            placeholder='topics to improve'
            value={formData.topicsToImprove}
          />
        </Fieldset>
        <Button type='submit' disabled={notification}>
          Submit
        </Button>
      </form>
      {notification &&
        createPortal(
          <Notification onClose={onClose}>Your data was sent successfully.</Notification>,
          document.body,
        )}
    </>
  );
};
