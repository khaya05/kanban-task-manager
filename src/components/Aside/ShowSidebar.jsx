import { ReactComponent as ShowAsideIcon } from '../../assets/icon-show-sidebar.svg';
import { useGlobalContext } from '../../Context/context';

import './ShowSidebar.css';

function ShowSidebar() {
  const { showAside, setShowAside } = useGlobalContext();

  const handleClick = () => {
    setShowAside(true);
  };

  return (
    <div
      className={`desktop-show-aside ${showAside && 'hide-sidebar-btn-toggle'}`}
      onClick={handleClick}
    >
      <ShowAsideIcon />
    </div>
  );
}

export default ShowSidebar;
