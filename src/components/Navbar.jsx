import profilePic from '../assets/images/profilePic.jpg';
import flagPT from '../assets/icons/flag-pt.webp';
import { NavLink } from 'react-router-dom';

const Navbar = ({location}) => {



  return (
    <nav className='w-[300px] h-[688px] m-4 p-6 flex flex-col bg-[#121212] shadow-base rounded-2xl'>
        <div className='nav-content'>
            <div className="profile-wrapper flex flex-row items-center gap-2">
                <div className="profile-pic size-[64px] bg-linear-to-b from-[#2E2E2E] to-[#222222] rounded-2xl stroke-1 stroke-[#4a4a4a] shadow-base overflow-hidden">
                    <img src={profilePic} className='w-full h-full object-cover' alt="david's profile picture" />
                </div>
                <div>
                    <p className="text-base font-semibold">David Fernandes</p>
                    <p className="text-sm text-[#e0e0e0]">Based in {location} <img src={flagPT} alt="flag icon from Portugal"  className='w-4 inline-block'/></p>
                </div>
            </div>
            <hr className="my-4 border-t border-[#050505] shadow-[0_1px_rgba(255,255,255,0.2)]" />
            <div className='nav-links w-full flex flex-col gap-2'>

                <NavLink
                    to="/"
                    end
                    className={({ isActive }) => isActive ? "active-link" : "inactive-link"}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width="18px" height="18px" fill="#ffffff"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm280-200q32 0 59-16.5t44-43.5q6-9 15-14.5t20-5.5h142v-360H200v360h142q11 0 20 5.5t15 14.5q17 27 44 43.5t59 16.5Z"/></svg>
                        <p className="text-base font-medium leading-[1.4]">Home</p>
                </NavLink>
                <NavLink
                    to="/about"
                    end
                    className={({ isActive }) => isActive ? "active-link" : "inactive-link"}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width="18px" height="18px" fill="#ffffff"><path d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q53 0 100-15.5t86-44.5q-39-29-86-44.5T480-280q-53 0-100 15.5T294-220q39 29 86 44.5T480-160Zm0-360q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm0-60Zm0 360Z"/></svg>
                        <p className="text-base font-medium leading-[1.4]">About</p>
                </NavLink>
                <NavLink
                    to="/projects"
                    end
                    className={({ isActive }) => isActive ? "active-link" : "inactive-link"}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width="18px" height="18px" fill="#ffffff"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h207q16 0 30.5 6t25.5 17l57 57h360q17 0 28.5 11.5T880-680q0 17-11.5 28.5T840-640H447l-80-80H160v480l79-263q8-26 29.5-41.5T316-560h516q41 0 64.5 32.5T909-457l-72 240q-8 26-29.5 41.5T760-160H160Zm84-80h516l72-240H316l-72 240Zm-84-262v-218 218Zm84 262 72-240-72 240Z"/></svg>
                        <p className="text-base font-medium leading-[1.4]">Projects</p>
                </NavLink>
                <NavLink
                    to="/contacts"
                    end
                    className={({ isActive }) => isActive ? "active-link" : "inactive-link"}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width="18px" height="18px" fill="#ffffff"><path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480v58q0 59-40.5 100.5T740-280q-35 0-66-15t-52-43q-29 29-65.5 43.5T480-280q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480v58q0 26 17 44t43 18q26 0 43-18t17-44v-58q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93h160q17 0 28.5 11.5T680-120q0 17-11.5 28.5T640-80H480Zm0-280q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Z"/></svg>
                        <p className="text-base font-medium leading-[1.4]">Contacts</p>
                </NavLink>
                
            </div>
        </div>
    </nav>
  )
}

export default Navbar