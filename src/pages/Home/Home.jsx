import { Aside, Navbar, Overlay } from '../../components';
import { useGlobalContext } from '../../Context/context';

import './Home.css'

function Home() {
  const { showOverlay, setShowOverlay, showAside } = useGlobalContext();
  console.log(showOverlay);
  return (
    <main id="main">
      {showOverlay && <Overlay />}
      {showAside && (
        <div className="home__aside-container">
          <Aside />
        </div>
      )}
      <div className={`home__main-container `}>
        <Navbar />
      </div>
    </main>
  );
}

export default Home;
