import './sideBar.css'
import { AiOutlineHeart} from 'react-icons/ai'
import { LiaWalletSolid} from 'react-icons/lia'
import { IoMdNotificationsOutline,} from 'react-icons/io'
import {BiLogOut} from 'react-icons/bi'
import {MdOutlineDarkMode} from 'react-icons/md'
import {FaUserFriends} from 'react-icons/fa'
import {IoAnalytics} from 'react-icons/io5'
import {FaAtlassian} from 'react-icons/fa'

export const SideBar = () => {
  return (
    <>
    <title>Sidebar</title>
    <title>Webleb</title>
    <div id="stars" />
    <div id="stars2" />
    <div id="stars3" />
  <link rel="stylesheet" href="style.css" />
  <div className="sidebar">
    <div className="dots">
      <img src="images/dots.png" alt="dots" />
    </div>
    <div className="profile">
   <FaAtlassian/>
    </div>
    <ul>
      <span>Analytics</span>
      <li>
        <a href="#">
       <IoAnalytics/>
              <p>Dashboard</p>
        </a>
      </li>
      <li>
        <a href="#">
        <FaUserFriends />
                  <p>Friends</p>
        </a>
      </li>
    </ul>
    <ul>
      <span>Content</span>
      <li className="noti">
        <a href="#">
        <IoMdNotificationsOutline/>       
           <p>Notifications</p>
        </a>
      </li>
      <li>
        <a href="#">
        <LiaWalletSolid/>      
           <p>Wallets</p>
        </a>
      </li>
      <li className="likes">
        <a href="#">

      <AiOutlineHeart/>     
           <p>Likes</p>
        </a>
      </li>
    </ul>
    <ul>
      <span>Custom</span>
      <li className="switch-theme">
        <a href="#">
       <MdOutlineDarkMode/>        
         <p>Darkmode</p>
          <button>
            <div className="circle" />
          </button>
        </a>
      </li>
      <li>
        <a href="#">
       <BiLogOut/>
                <p>Logout</p>
        </a>
      </li>
    </ul>
  </div>
</>
  )
}
