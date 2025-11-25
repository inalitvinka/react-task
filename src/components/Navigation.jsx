import { Link } from 'react-router';

export const Navigation = () => {
  return (
    <nav>
      <ul
        style={{
          marginTop: '2rem',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          fontSize: '1.5rem',
          textAlign: 'center',
        }}
      >
        <li>
          <Link to='/Task1'>Task 1 Forms</Link>
        </li>
        <li>
          <Link to='/Task2'>Task 2 Portals</Link>
        </li>
      </ul>
    </nav>
  );
};
