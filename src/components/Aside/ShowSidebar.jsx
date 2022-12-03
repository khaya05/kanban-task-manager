import { useDispatch, useSelector } from 'react-redux';
import { ReactComponent as ShowAsideIcon } from '../../assets/icon-show-sidebar.svg';
import { uiActions } from '../../store/ui-slice';

import './ShowSidebar.css';

function ShowSidebar() {
  const dispatch = useDispatch();
  const isSidebarVisible = useSelector((state) => state.ui.isSidebarVisible);

  const handleClick = () => {
    dispatch(uiActions.showSidebar())
  };

  return (
    <div
      className={`desktop-show-aside ${isSidebarVisible && 'hide-sidebar-btn-toggle'}`}
      onClick={handleClick}
    >
      <ShowAsideIcon />
    </div>
  );
}

export default ShowSidebar;
