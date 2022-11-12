import uaflag from "../../img/uaflag.png"
import embleme from "../../img/army.png"
import "./Header.css"
import React,{useState} from "react"
function Header() {
 const [show,setShow]=useState(false);
  let showGeneral=()=>{
    setShow(!show);
  }
    return (
    <header className='header-main'>
      <ul className='ul-header'>
      <li className='li-header'><a href='/'><img className='img-li' src={uaflag}/></a> </li>
          <li className='li-header'><a className='link' href='/internal-serve'>Внутрішня служба</a></li>
          <li className='li-header'><a className='link' href='/garrisone-serve'> Гарнізонна служба</a></li>
          <li className='li-header'><a className='link' href='/guard-serve'>Вартовова служба</a></li>
      <li className='li-header'><button onClick={()=>{showGeneral()}} className='btn'><img className='img-li' src={embleme}/></button></li>
      </ul>
      <img className={show?"general":"general none dn"}  src={require('../../img/general.jpg')}></img>
    </header>
    
    );
  }
  
  export default Header;