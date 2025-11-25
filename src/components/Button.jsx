export const Button = ({ children, ...props }) => {
  return (
    <button
      {...props}
      className={
        'px-3 py-1.5  mt-2 bg-indigo-700 rounded-md text-white hover:cursor-pointer hover:bg-indigo-800 disabled:cursor-default disabled:bg-indigo-400 disabled:hover:bg-indigo-400 transition'
      }
    >
      {children}
    </button>
  );
};
