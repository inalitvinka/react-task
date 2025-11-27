export const FieldError = ({ message }) => {
  if (!message) return null;
  return <span className={`absolute -bottom-4.5 text-red-600 text-xs`}>{message}</span>;
};
