import { useSelector } from 'react-redux';
import {
  Aside,
  Columns,
  Navbar,
  Overlay,
  ShowSidebar,
  TaskFullDetails,
} from '../../components';
// import { useGlobalContext } from '../../Context/context';

import './Home.css';

function Home() {
  // const { showOverlay, setShowOverlay, showAside, showTaskDetails } =
    // useGlobalContext();

  const isSidebarVisible = useSelector((state) => state.ui.isSidebarVisible);
  const isOverlayVisible = useSelector((state) => state.ui.isOverlayVisible);
  const isTaskDetailsVisible = useSelector(
    (state) => state.ui.isTaskDetailsVisible
  );

  return (
    <main id="main">
      {isOverlayVisible && <Overlay />}
      {isTaskDetailsVisible && <TaskFullDetails />}

      {isSidebarVisible && (
        <div className="home__aside-container">
          <Aside />
        </div>
      )}
      <div
        className={`home__main-container ${
          isSidebarVisible ? 'translate-home' : ''
        }`}
      >
        <Navbar />
        <Columns />
      </div>
      <div
        className={`home__show-sidebar-container ${
          isSidebarVisible && 'hide-container'
        }`}
      >
        <ShowSidebar />
      </div>
    </main>
  );
}

export default Home;
