export const Input = ({ label, labelClass = '', inputClass = '', ...props }) => {
  return (
    <label htmlFor={props.id} className={`mb-1 text-gray-700 ${labelClass}`}>
      {label}
      <input
        {...props}
        className={`px-3 py-1.5 border border-indigo-800 focus:outline-none rounded-md ${inputClass}`}
      />
    </label>
  );
};
