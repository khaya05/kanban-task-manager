import { useContext } from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import { boards } from '../content/data';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [index, setIndex] = useState(1);
  const [currentBoard, setCurrentBoard] = useState(boards[index]);
  const [currentTask, setCurrentTask] = useState({});
  const [preferrersDarkMode, setPreferrersDarkMode] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);


  return (
    <AppContext.Provider
      value={{
        preferrersDarkMode,
        index,
        setIndex,
        currentTask,
        setCurrentTask,
        currentBoard,
        setCurrentBoard,
        setPreferrersDarkMode,
        showDropdown,
        setShowDropdown,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
