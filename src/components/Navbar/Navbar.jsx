import { chevronDown, ellipsis, plusIcon } from '../../assets';
import { AddButton, Logo } from '../';
import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '../../store/ui-slice';
import './Navbar.css';

function Navbar() {
  const dispatch = useDispatch();
  const currentBoard = useSelector((state) => state.boards.currentBoard);
  const isSidebarVisible = useSelector((state) => state.ui.isSidebarVisible);


  const handleMobileShowBoards = () => {
    dispatch(uiActions.showSidebar());
    dispatch(uiActions.toggleOverlay());
  };

  return (
    <nav>
      <div className="nav-container">
        <div className="nav-container__left">
          {/* mobile logo */}
          <figure className="mobile-logo-container">
            <Logo />
          </figure>

          {!isSidebarVisible && (
            <figure className="logo-container">
              <Logo />
            </figure>
          )}

          <div className={`nav__board-name-container`}>
            <h1>{currentBoard.name}</h1>

            <div
              className={`mobile-show-boards-container ${
                isSidebarVisible ? 'translate-icon' : ''
              }`}
              onClick={handleMobileShowBoards}
            >
              <img src={chevronDown} alt="show all boards" />
            </div>
          </div>
        </div>

        <div className="nav__add-or-delete-task-btn-container">
          <div className="nav__mobile-add-task-btn-container">
            <img src={plusIcon} alt="add new task" />
          </div>

          <div className="nav__add-btn-container">
            <AddButton text="+ add new task" />
          </div>

          <div className="nav__board-details-btn-container">
            <img src={ellipsis} alt="show more info" />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
