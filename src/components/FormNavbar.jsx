import { Link } from 'react-router';

export const FormNavbar = () => {
  return (
    <nav>
      <ul className='mb-5 flex justify-center gap-10'>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='mentor'>Mentor</Link>
        </li>
        <li>
          <Link to='mentee'>Mentee</Link>
        </li>
      </ul>
    </nav>
  );
};
