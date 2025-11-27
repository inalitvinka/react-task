export const Fieldset = ({ legend, children, className = '' }) => (
  <fieldset className={`relative mb-4 flex flex-col gap-2 ${className}`}>
    <legend className='mb-2 font-semibold'>{legend}</legend>
    {children}
  </fieldset>
);
