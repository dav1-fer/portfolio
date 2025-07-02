import profilePic from '../assets/images/profilePic.jpg';
import flagPT from '../assets/icons/flag-pt.webp';
import { NavLink } from 'react-router-dom';

const Navbar = ({location}) => {
  return (
    <nav className='w-[300px] h-[688px] p-6 flex flex-col bg-[#121212] shadow-base rounded-2xl'>
        <div id="navContent">
            <div id="profileWrapper" className="flex flex-row items-center gap-2">
                <div id="profilePic" className="size-[64px] bg-linear-to-b from-[#2E2E2E] to-[#222222] rounded-2xl stroke-1 stroke-[#4a4a4a] shadow-base overflow-hidden">
                    <img src={profilePic} className='w-full h-full object-cover' alt="david's profile picture" />
                </div>
                <div id="profileDetails">
                    <p className="text-base font-semibold">David Fernandes</p>
                    <p className="text-sm text-[#e0e0e0]">Based in {location} <img src={flagPT} alt="flag icon from Portugal"  className='w-4 inline-block'/></p>
                </div>
            </div>
            <div id="line" className="w-full stroke-2 stroke-[#050505] drop-shadow-[0_1px_rgba(255,255,255,0.20)]"></div>
            <div id="navLinks" className='w-full flex flex-col gap-2'>
                <NavLink to={'/'} className='flex flex-row gap-2 px-4 py-3 bg-linear-to-b from-[#181818] to-[#080808] shadow-base rounded-lg'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width="18px" height="18px" fill="#ffffff"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm280-200q32 0 59-16.5t44-43.5q6-9 15-14.5t20-5.5h142v-360H200v360h142q11 0 20 5.5t15 14.5q17 27 44 43.5t59 16.5Z"/></svg>
                <p className='font-medium leading-[1.4]'>Home</p>
                </NavLink>
                
            </div>
        </div>
    </nav>
  )
}

export default Navbar