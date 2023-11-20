import React ,{useState} from 'react'
import './Sidebar.css'
const Sidebar = () => {
    const [primaryColor , setPrimaryColor] = useState('bg-blue-800')

  return (
    <>
    <div className="w-[300px] shadow-2xl">
          <ul>
            <li className={`${primaryColor} px-10  flex justify-between items-center`}>
            <h1 className={`py-2 text-center text-white text-base font-medium `}>
                ALL DEPARARTEMENTS 
               
              </h1>
              <span>
                  <i class="ri-arrow-drop-down-line text-white text-lg"></i>
                </span>
            </li>
            <div class="mega-sidebar flex justify-between items-center px-5">
            <a href="#" onmouseover="showMenu('mega-sidebar-menu')" onmouseout="hideMenu('mega-sidebar-menu')"> <h1 class="text-base text-slate-700 font-medium">
                <i class="ri-macbook-line"></i> Computer & Laptops
            </h1></a>
            <span>
                <i class="ri-arrow-right-s-line text-base text-slate-700	 font-medium"></i>
              </span>
            <div class="mega-sidebar-menu" id="mega-sidebar-menu">
                <a href='/' className={`text-blue-800`}>Mega Option 1</a>
                <a href='/' className={`text-blue-800`}>Mega Option 2</a>
                <a href='/' className={`text-blue-800`}>Mega Option 3</a>
            </div>
            </div>

            <div class="mega-sidebar flex justify-between items-center px-5">
            <a href="#" onmouseover="showMenu('mega-sidebar-menu')" onmouseout="hideMenu('mega-sidebar-menu')">
            <h1 className="text-base text-slate-700	 font-medium">
                <i class="ri-smartphone-line"></i> Phones & Tablets
              </h1>
            </a>
            <span>
                <i class="ri-arrow-right-s-line text-base text-slate-700	 font-medium"></i>
              </span>
            <div class="mega-sidebar-menu" id="mega-sidebar-menu">
                <a href='/' className={`text-blue-800`}>Mega Option 1</a>
                <a href='/' className={`text-blue-800`}>Mega Option 2</a>
                <a href='/' className={`text-blue-800`}>Mega Option 3</a>
            </div>
            </div>
            <div class="mega-sidebar flex justify-between items-center px-5">
            <a href="#" onmouseover="showMenu('mega-sidebar-menu')" onmouseout="hideMenu('mega-sidebar-menu')">
            <h1 className="text-base text-slate-700	 font-medium">
                <i class="ri-macbook-line text-base text-slate-700	 font-medium"></i> Computer & Laptops
              </h1>
            </a>
            <span>
                <i class="ri-arrow-right-s-line text-base text-slate-700	 font-medium"></i>
              </span>
            <div class="mega-sidebar-menu" id="mega-sidebar-menu">
                <a href='/' className={`text-blue-800`}>Mega Option 1</a>
                <a href='/' className={`text-blue-800`}>Mega Option 2</a>
                <a href='/' className={`text-blue-800`}>Mega Option 3</a>
            </div>
            </div>
            <div class="mega-sidebar flex justify-between items-center px-5">
            <a href="#" onmouseover="showMenu('mega-sidebar-menu')" onmouseout="hideMenu('mega-sidebar-menu')">
            <h1 className="text-base text-slate-700	 font-medium">
                <i class="ri-camera-switch-line"></i> Cemera & Photo
              </h1>
            </a>
            <span>
                <i class="ri-arrow-right-s-line text-base text-slate-700	 font-medium"></i>
              </span>
            <div class="mega-sidebar-menu" id="mega-sidebar-menu">
                <a href='/' className={`text-blue-800`}>Mega Option 1</a>
                <a href='/' className={`text-blue-800`}>Mega Option 2</a>
                <a href='/' className={`text-blue-800`}>Mega Option 3</a>
            </div>
            </div>
            <div class="mega-sidebar flex justify-between items-center px-5">
            <a href="#" onmouseover="showMenu('mega-sidebar-menu')" onmouseout="hideMenu('mega-sidebar-menu')">
            <h1 className="text-base text-slate-700	 font-medium">
                <i class="ri-tv-line text-base text-slate-700	 font-medium"></i> Tv & Audio
              </h1>
            </a>
            <span>
                <i class="ri-arrow-right-s-line text-base text-slate-700	 font-medium"></i>
              </span>
            <div class="mega-sidebar-menu" id="mega-sidebar-menu">
                <a href='/' className={`text-blue-800`}>Mega Option 1</a>
                <a href='/' className={`text-blue-800`}>Mega Option 2</a>
                <a href='/' className={`text-blue-800`}>Mega Option 3</a>
            </div>
            </div>
            <div class="mega-sidebar flex justify-between items-center px-5">
            <a href="#" onmouseover="showMenu('mega-sidebar-menu')" onmouseout="hideMenu('mega-sidebar-menu')">
            <h1 className="text-base text-slate-700	 font-medium">
                <i class="ri-gamepad-line"></i> Game & Playstayion
              </h1>
            </a>
            <span>
                <i class="ri-arrow-right-s-line text-base text-slate-700	 font-medium"></i>
              </span>
            <div class="mega-sidebar-menu" id="mega-sidebar-menu">
                <a href='/' className={`text-blue-800`}>Mega Option 1</a>
                <a href='/' className={`text-blue-800`}>Mega Option 2</a>
                <a href='/' className={`text-blue-800`}>Mega Option 3</a>
            </div>
            </div>

            <div class="mega-sidebar flex justify-between items-center px-5">
            <a href="#" onmouseover="showMenu('mega-sidebar-menu')" onmouseout="hideMenu('mega-sidebar-menu')">
            <h1 className="text-base text-slate-700	 font-medium">
                <i class="ri-shape-2-line"></i> Accessoites
              </h1>
            </a>
            <span>
                <i class="ri-arrow-right-s-line text-base text-slate-700	 font-medium"></i>
              </span>
            <div class="mega-sidebar-menu" id="mega-sidebar-menu">
                <a href='/' className={`text-blue-800`}>Mega Option 1</a>
                <a href='/' className={`text-blue-800`}>Mega Option 2</a>
                <a href='/' className={`text-blue-800`}>Mega Option 3</a>
            </div>
            </div>
            <div class="mega-sidebar flex justify-between items-center px-5">
            <a href="#" onmouseover="showMenu('mega-sidebar-menu')" onmouseout="hideMenu('mega-sidebar-menu')">
            <h1 className="text-base text-slate-700	 font-medium">
                <i class="ri-car-line  text-base text-slate-700	 font-medium"></i> Car Electronic
              </h1>
            </a>
            <span>
                <i class="ri-arrow-right-s-line text-base text-slate-700	 font-medium"></i>
              </span>
            <div class="mega-sidebar-menu" id="mega-sidebar-menu">
                <a href='/' className={`text-blue-800`}>Mega Option 1</a>
                <a href='/' className={`text-blue-800`}>Mega Option 2</a>
                <a href='/' className={`text-blue-800`}>Mega Option 3</a>
            </div>
            </div>
           
            <div class="mega-sidebar flex justify-between items-center px-5">
            <a href="#" onmouseover="showMenu('mega-sidebar-menu')" onmouseout="hideMenu('mega-sidebar-menu')">
            <h1 className="text-base text-slate-700	 font-medium">
                <i class="ri-speaker-fill"></i> Gagdets
              </h1>
            </a>
            <span>
                <i class="ri-arrow-right-s-line text-base text-slate-700	 font-medium"></i>
              </span>
            <div class="mega-sidebar-menu" id="mega-sidebar-menu">
                <a href='/' className={`text-blue-800`}>Mega Option 1</a>
                <a href='/' className={`text-blue-800`}>Mega Option 2</a>
                <a href='/' className={`text-blue-800`}>Mega Option 3</a>
            </div>
            </div>
            <div class="mega-sidebar flex justify-between items-center px-5">
            <a href="#" onmouseover="showMenu('mega-sidebar-menu')" onmouseout="hideMenu('mega-sidebar-menu')">
            <h1 className="text-base text-slate-700	 font-medium">
                <i class="ri-more-fill"></i> others Equipement
              </h1>
            </a>
            <span>
                <i class="ri-arrow-right-s-line text-base text-slate-700	 font-medium"></i>
              </span>
            <div class="mega-sidebar-menu" id="mega-sidebar-menu">
                <a href='/' className={`text-blue-800`}>Mega Option 1</a>
                <a href='/' className={`text-blue-800`}>Mega Option 2</a>
                <a href='/' className={`text-blue-800`}>Mega Option 3</a>
            </div>
            </div>
          </ul>
        </div>
    </>
  )
}

export default Sidebar