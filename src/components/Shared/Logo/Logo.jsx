import { desktopDarkLogo, desktopLightLogo, mobileLogo } from '../../../assets';
import { useGlobalContext } from '../../../Context/context';
import './Logo.css';

function Logo() {
  const { preferrersDarkMode } = useGlobalContext;
  return (
    <picture id="logo">
      <source
        media="(min-width:48em)"
        srcSet={preferrersDarkMode ? desktopDarkLogo : desktopLightLogo}
      />
      <img src={mobileLogo} alt="logo" className="mobile-logo" />
    </picture>
  );
}

export default Logo;
