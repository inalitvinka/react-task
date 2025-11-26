import { NavLink } from 'react-router';

export const Navigation = ({ links, className }) => {
  return (
    <nav>
      <ul className={className || `mb-5 flex justify-center gap-10`}>
        {links.map(link => (
          <li key={link.to}>
            <NavLink
              to={link.to}
              className={({ isActive }) =>
                `transition-colors duration-300 ${
                  isActive ? 'text-indigo-600 font-bold' : 'text-gray-700'
                }`
              }
            >
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
