import { useContext } from 'react';
import welcomeImage from '../assets/welcome-img.jpg';
import { RouterContext } from '../Provider/ReactContextProvider';

const MyProfile = () => {
  const { user } = useContext(RouterContext);
  return (
    <div>
        {/* Hero */}
      <div className='relative md:w-[80%] mx-auto mb-5'>
        <img
          src={welcomeImage}
          className='opacity-50 lg:h-[20rem] md:h-[15rem] w-full object-cover'
          alt=''
        />
        <div className='absolute inset-16'>
          <h2 className='text-4xl font-bold text-center'>Welcome</h2>
          <p className='text-center text-3xl text-orange-500 animate__animated animate__slideInRight mb-5'>
            {user && user.displayName}
          </p>
        </div>
      </div>
      
      {/* Card */}
      <div className='rounded-md p-2  flex flex-col items-center justify-center'>
        <img
          className='w-56 h-56 object-cover rounded-full'
          src={user?.photoURL}
          alt='Profile Photo'
        />
        <h2 className='text-2xl font-bold text-center'>
          {user && user.displayName}
        </h2>
        <p className='text-lg text-gray-700'>Email: {user?.email}</p>
      </div>
    </div>
  );
};

export default MyProfile;
