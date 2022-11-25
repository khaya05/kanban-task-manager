import { useState } from 'react';
import {
  chevronDown,
  desktopDarkLogo,
  desktopLightLogo,
  ellipsis,
  mobileLogo,
  plusIcon,
} from '../../assets';
import { AddButton } from '../';
import './Navbar.css';

function Navbar() {
  const [theme, setTheme] = useState('dark-mode');
  return (
    <nav>
      <div className="nav-container">
        <div className="nav-container__left">
          {/* logo */}
          <picture className="logo-container">
            <source
              media="(min-width:48em)"
              srcSet={
                theme === 'dark-mode' ? desktopLightLogo : desktopDarkLogo
              }
            />

            <img src={mobileLogo} alt="logo" className="mobile-logo" />
          </picture>

          <div className="nav__board-name-container">
            <h1>Platform Launch</h1>

            <div className="mobile-show-boards-container">
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
