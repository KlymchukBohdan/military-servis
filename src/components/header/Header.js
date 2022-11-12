import uaflag from "../../img/uaflag.png"
import embleme from "../../img/army.png"
function Header() {
    return (
    <header className='header-main'>
      <ul className='ul-header'>
      <li className='li-header'><a href='/'><img className='img-li' src={uaflag}/></a> </li>
          <li className='li-header'><a className='link' href='/internal-serve'>Внутрішня служба</a></li>
          <li className='li-header'><a className='link' href='/garrisone-serve'> Гарнізонна служба</a></li>
          <li className='li-header'><a className='link' href='/guard-serve'>Вартовова служба</a></li>
      <li className='li-header'><a className='link' href='../../img/army.png'><img className='img-li' src={embleme}/></a></li>
      </ul>
    </header>
    
    );
  }
  
  export default Header;