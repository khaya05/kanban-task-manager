import ReactDOM from 'react-dom';
import './Overlay.css'

function Overlay() {
  return <div className="overlay"></div>;
}

{
  ReactDOM.createPortal(<Overlay />, document.getElementById('overlay-root'));
}

export default Overlay;
