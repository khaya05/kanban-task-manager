import { useState } from 'react';
import { chevronDown, ellipsis, plusIcon } from '../../assets';
import { AddButton, Logo } from '../';
import './Navbar.css';
import { useGlobalContext } from '../../Context/context';

function Navbar() {
  const [theme, setTheme] = useState('dark-mode');
  const { showAside, setShowAside, setShowOverlay } = useGlobalContext();

  const handleMobileShowBoards = () => {
    setShowOverlay(true);
    setShowAside(true);
  };

  return (
    <nav>
      <div className="nav-container">
        <div className="nav-container__left">
          {/* mobile logo */}
          <figure className="logo-container">
            <Logo />
          </figure>

          <div className={`nav__board-name-container`}>
            <h1>Platform Launch</h1>

            <div
              className={`mobile-show-boards-container ${
                showAside ? 'translate-icon' : ''
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
