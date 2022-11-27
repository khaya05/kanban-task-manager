import { useContext, useEffect } from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import { boards } from '../content/data';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [showOverlay, setShowOverlay] = useState(false);
  const [allBoards, setAllBoards] = useState(boards);
  const [index, setIndex] = useState(0);
  const [currentBoard, setCurrentBoard] = useState(boards[index]);
  const [preferrersDarkMode, setPreferrersDarkMode] = useState(false);
  const [showAside, setShowAside] = useState(false);

  // useEffect(() => {
  //   setCurre
  // })

  return (
    <AppContext.Provider
      value={{
        showOverlay,
        allBoards,
        preferrersDarkMode,
        showAside,
        index,
        setIndex,
        setShowAside,
        currentBoard,
        setCurrentBoard,
        setShowOverlay,
        setAllBoards,
        setPreferrersDarkMode,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
