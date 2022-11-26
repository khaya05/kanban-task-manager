import { useContext } from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import { boards } from '../content/data';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [showOverlay, setShowOverlay] = useState(false);
  const [allBoards, setAllBoards] = useState(boards);
  const [preferrersDarkMode, setPreferrersDarkMode] = useState(false);
  const [showAside, setShowAside] = useState(!false);

  return (
    <AppContext.Provider
      value={{
        showOverlay,
        allBoards,
        preferrersDarkMode,
        showAside,
        setShowAside,
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
