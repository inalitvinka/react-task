import { Routes, Route } from 'react-router';
import './App.css';
import { Task1, Task2, Task3, MenteeForm, MentorForm } from '@tasks';
import { Home } from '@pages/Home';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='task1' element={<Task1 />}>
          <Route path='mentor' element={<MentorForm />} />
          <Route path='mentee' element={<MenteeForm />} />
        </Route>
        <Route path='/task2' element={<Task2 />} />
        <Route path='/task3' element={<Task3 />} />
      </Routes>
    </>
  );
};

export default App;
