import { useState } from 'react';
import { Button } from '@components';

export const BuggyButton = () => {
  const [counter, setCounter] = useState(0);
  const clickHandler = () => setCounter(prev => prev + 1);
  if (counter === 3) {
    throw new Error('I crashed.');
  }
  return (
    <>
      <p className='mt-7 mb-3 text-indigo-900 font-bold text-lg'>{counter}</p>
      <Button onClick={clickHandler}>+</Button>
      <p className='mt-3 text-sm text-gray-500 italic'>Increase counter to simulate an error</p>
    </>
  );
};
