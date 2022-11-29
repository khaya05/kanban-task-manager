import React, { useEffect } from 'react';
import { useGlobalContext } from '../../Context/context';
import { ReactComponent as BoardIcon } from '../../assets/icon-board.svg';
import { ReactComponent as HideSidebar } from '../../assets/icon-hide-sidebar.svg';
import Logo from '../Shared/Logo/Logo';
import { ThemeToggle } from '../';

import './Aside.css';

function Aside() {
  const {
    allBoards,
    setShowOverlay,
    setShowAside,
    setIndex,
    currentBoard,
    setCurrentBoard,
    index,
  } = useGlobalContext();
  const boardsLength = allBoards.length;

  const handleOnBlur = (e) => {
    console.log(e.target);
    setShowAside(false);
    setShowOverlay(false);
  };

  const handleHideSidebar = () => {
    setShowAside(false);
  };

  useEffect(() => {
    setCurrentBoard(allBoards[index]);
  }, [index]);

  const getCurrentBoard = (id) => {
    const localIndex = allBoards.indexOf(
      allBoards.find((board) => board.id === id)
    );
    setIndex(localIndex);
  };

  return (
    <aside>
      <div className="aside__top">
        <div className="aside__logo-container">
          <Logo />
        </div>

        <p className="boards-count">ALL BOARDS ({boardsLength})</p>

        <ul className="aside__boards-list">
          {allBoards.map(({ id, name }) => (
            <li key={id} onClick={() => getCurrentBoard(id)}>
              <span className="board-icon-container">
                <BoardIcon />
              </span>

              <h4>{name}</h4>
            </li>
          ))}
        </ul>

        <div className="add-new-board-container">
          <button className="aside__add-new-board">
            <span className="board-icon-container">
              <BoardIcon />
            </span>
            + create new board
          </button>
        </div>
      </div>

      <div className="aside__bottom">
        <div className="theme-toggle-container">
          <ThemeToggle />
        </div>

        <button
          className="hide-sidebar-btn"
          type="button"
          onClick={handleHideSidebar}
        >
          <div className="close-icon-container">
            <HideSidebar />
          </div>
          <p>Hide Sidebar</p>
        </button>
      </div>
    </aside>
  );
}

export default Aside;
