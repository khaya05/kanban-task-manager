import {
  Aside,
  Columns,
  Navbar,
  Overlay,
  ShowSidebar,
  TaskFullDetails,
} from '../../components';
import { useGlobalContext } from '../../Context/context';

import './Home.css';

function Home() {
  const { showOverlay, setShowOverlay, showAside, showTaskFullDetails } =
    useGlobalContext();

  return (
    <main id="main">
      {showOverlay && <Overlay />}
      {showTaskFullDetails && <TaskFullDetails />}
      {showAside && (
        <div className="home__aside-container">
          <Aside />
        </div>
      )}
      <div
        className={`home__main-container ${showAside ? 'translate-home' : ''}`}
      >
        <Navbar />
        <Columns />
      </div>
      <div
        className={`home__show-sidebar-container ${
          showAside && 'hide-container'
        }`}
      >
        <ShowSidebar />
      </div>
    </main>
  );
}

export default Home;
