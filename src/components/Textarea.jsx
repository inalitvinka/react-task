import { forwardRef } from 'react';

export const Textarea = forwardRef(({ id, label, value, onChange, rows = 2, ...props }, ref) => {
  return (
    <label htmlFor={id} className='mb-1 text-gray-700 flex flex-col gap-2'>
      {label}
      <textarea
        {...props}
        id={id}
        ref={ref ?? undefined}
        {...(value !== undefined ? { value, onChange } : {})}
        rows={rows}
        className='px-1.5 py-1.5 border border-indigo-800 focus:outline-none focus:ring-1 focus:ring-indigo-800/70 rounded-md'
      ></textarea>
    </label>
  );
});
