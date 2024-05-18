import React from 'react'; // Gunakan tanda kutip tunggal untuk string
import './Navbar.css'; // Gunakan tanda kutip tunggal untuk string
import menu_icon from '../../assets/menu.png'; // Gunakan tanda kutip tunggal untuk string
import logo from '../../assets/logo.png'; // Gunakan tanda kutip tunggal untuk string
import search_icon from '../../assets/search.png'; // Gunakan tanda kutip tunggal untuk string
import upload_icon from '../../assets/more.png';
import more_icon from '../../assets/more.png';
import notification_icon from '../../assets/notification.png';
import profile_icon from '../../assets/jack.png';


const Navbar = ({setSidebar}) => {
  return (
    <nav className="flex-div"> {/* Gunakan tanda kutip ganda untuk nilai atribut */}
      <div className='nav-left flex-div'>
        <img className='menu-icon' onClick={()=>setSidebar(prev=>prev===false?true:false)} src={menu_icon} alt=""/>
        <img className='logo' src={logo} alt=""/>
      </div>

      <div className="nav-middle flex-div">
          <div className="search-box flex-div">
            <input type="text" placeholder="search"/> {/* Gunakan tanda kutip ganda untuk nilai atribut */}
            <img src={search_icon} alt="" />
          </div>
         
      </div>

      <div className="nav-right flex-div">
        <img src={upload_icon} alt="" />
        <img src={more_icon} alt="" />
        <img src={notification_icon} alt="" />
        <img src={profile_icon} className='user-icon' alt="" />
      </div>
    </nav>
  )
}

export default Navbar;
