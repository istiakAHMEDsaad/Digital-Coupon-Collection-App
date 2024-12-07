import { Navbar } from 'flowbite-react';
import { Link, NavLink } from 'react-router-dom';
// import headerLogo from '../assets/coupon-59-48.png';
import { LiaHomeSolid, LiaUserCogSolid, LiaLaptopSolid } from 'react-icons/lia';
import { TbBrandAppgallery } from 'react-icons/tb';
import 'animate.css';
import { useContext } from 'react';
import { RouterContext } from '../Provider/ReactContextProvider';

const Header = () => {
  // Set Browser user
  const { user, signOutUser } = useContext(RouterContext);

  const navLink = (
    <>
      <NavLink
        to='/'
        className={({ isActive, isPending }) =>
          isActive ? 'normal-btn-active' : isPending ? 'pending' : 'normal-btn'
        }
      >
        <div className='flex items-center gap-1'>
          <LiaHomeSolid></LiaHomeSolid>
          <span>Home</span>
        </div>
      </NavLink>
      <NavLink
        to='/brands'
        className={({ isActive, isPending }) =>
          isActive ? 'normal-btn-active' : isPending ? 'pending' : 'normal-btn'
        }
      >
        <div className='flex items-center gap-1'>
          <TbBrandAppgallery></TbBrandAppgallery>
          <span>Brands</span>
        </div>
      </NavLink>
      {user?.email ? (
        <NavLink
          to='/my_profile'
          className={({ isActive, isPending }) =>
            isActive
              ? 'normal-btn-active'
              : isPending
              ? 'pending'
              : 'normal-btn'
          }
        >
          <div className='flex items-center gap-1'>
            <LiaUserCogSolid></LiaUserCogSolid>
            <span>My Profile</span>
          </div>
        </NavLink>
      ) : (
        ''
      )}
      <NavLink
        to='/about-dev'
        className={({ isActive, isPending }) =>
          isActive ? 'normal-btn-active' : isPending ? 'pending' : 'normal-btn'
        }
      >
        <div className='flex items-center gap-1'>
          <LiaLaptopSolid></LiaLaptopSolid>
          <span>About Dev</span>
        </div>
      </NavLink>
    </>
  );

  return (
    <div>
      <Navbar fluid rounded>
        <Navbar.Brand>
          {/* <img src={headerLogo} alt='logo' /> */}
          <h2 className='animate__animated animate__rubberBand animate__slow animate__infinite	infinite text-xl font-bold'>
            Cou<span className='text-[#E67E22]'>pon</span>
          </h2>
        </Navbar.Brand>
        <div className='flex md:order-2'>
          {user && user?.email ? (
            <div className='flex flex-col items-center justify-center'>
              <div>
                <img src={user?.photoURL} className='lg:w-10 w-7 mr-1 rounded-full shadow-md' />
                <p className='text-sm text-gray-600'>{user.displayName}</p>
              </div>
              <button
                onClick={signOutUser}
                className='bodrer text-white bg-[#E67E22] md:px-6 md:py-2 px-4 py-1 rounded-md hover:bg-[#E67E22]/80 active:scale-95 transition-all'
              >
                Logout
              </button>
            </div>
          ) : (
            <>
              <Link
                to='/auth'
                className='border text-white bg-[#E67E22] md:px-6 md:py-2 px-4 py-1 rounded-md hover:bg-[#E67E22]/80 active:scale-95 transition-all'
              >
                Login
              </Link>
              <Link
                to='/auth/signup'
                className='border text-white bg-[#E67E22] md:px-6 md:py-2 px-4 py-1 rounded-md hover:bg-[#E67E22]/80 active:scale-95 transition-all'
              >
                Sign Up
              </Link>
            </>
          )}
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>{navLink}</Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
