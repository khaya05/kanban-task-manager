import { useEffect } from 'react';
import { useGlobalContext } from '../../Context/context';
import { ReactComponent as BoardIcon } from '../../assets/icon-board.svg';
import { ReactComponent as HideSidebar } from '../../assets/icon-hide-sidebar.svg';
import Logo from '../Shared/Logo/Logo';
import { ThemeToggle } from '../';

import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '../../store/ui-slice';
import './Aside.css';
import { boardActions } from '../../store/boards-slice';

function Aside() {
  const dispatch = useDispatch();
  const { setCurrentBoard, index } = useGlobalContext();
  const boards = useSelector((state) => state.boards.boards);
  const boardsLength = boards.length;

  const handleOnBlur = (e) => {};

  const handleHideSidebar = () => {
    dispatch(uiActions.hideSidebar());
  };

  useEffect(() => {
    setCurrentBoard(boards[index]);
  }, [index]);

  const getCurrentBoard = (id) => {
    dispatch(boardActions.getCurrentBoard(id));
  };

  return (
    <aside>
      <div className="aside__top">
        <div className="aside__logo-container">
          <Logo />
        </div>

        <p className="boards-count">ALL BOARDS ({boardsLength})</p>

        <ul className="aside__boards-list">
          {boards.map(({ id, name }) => (
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
