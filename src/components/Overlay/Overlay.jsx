import ReactDOM from 'react-dom';
import { useDispatch } from 'react-redux';
import { useGlobalContext } from '../../Context/context';
import { uiActions } from '../../store/ui-slice';
import './Overlay.css';

function Overlay() {
  const dispatch = useDispatch();
  const { setShowOverlay, setShowTaskDetails } = useGlobalContext();
  const handleClick = () => {
    // setShowOverlay(false);
    // setShowTaskDetails(false);
    dispatch(uiActions.toggleOverlay());
    dispatch(uiActions.toggleTaskDetails());
  };

  return (
    <div className="overlay">
      <button onClick={handleClick}>close</button> 
    </div>
  );
}

{
  ReactDOM.createPortal(<Overlay />, document.getElementById('overlay-root'));
}

export default Overlay;
