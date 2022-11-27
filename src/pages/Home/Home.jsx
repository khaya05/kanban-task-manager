import { Aside, Navbar, Overlay, ShowSidebar } from '../../components';
import { useGlobalContext } from '../../Context/context';

import './Home.css';

function Home() {
  const { showOverlay, setShowOverlay, showAside } = useGlobalContext();

  return (
    <main id="main">
      {showOverlay && <Overlay />}
      {showAside && (
        <div className="home__aside-container">
          <Aside />
        </div>
      )}
      <div
        className={`home__main-container ${showAside ? 'translate-home' : ''}`}
      >
        <Navbar />
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
