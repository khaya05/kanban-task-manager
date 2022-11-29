import ReactDOM from 'react-dom';
import { useGlobalContext } from '../../Context/context';
import './Overlay.css';

function Overlay() {
  const { setShowOverlay, setShowTaskDetails } = useGlobalContext();
  const handleClick = () => {
    setShowOverlay(false);
    setShowTaskDetails(false);
  };

  return (
    <div className="overlay">
      <button onClick={handleClick}>close </button>
    </div>
  );
}

{
  ReactDOM.createPortal(<Overlay />, document.getElementById('overlay-root'));
}

export default Overlay;
