import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages';

function App() {
  const currentBoard = useSelector((state) => state.boards.currentBoard);
  const currentTask = useSelector((state) => state.boards.currentTask);
  
  // console.log(currentTask);
  // useEffect(() => {
  //   console.log(currentBoard);
  // }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
