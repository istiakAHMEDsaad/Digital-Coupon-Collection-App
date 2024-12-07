import { Outlet } from 'react-router-dom';
import Header from '../Components/Header';

const AuthLogSign = () => {
  return (
    // flex flex-col h-[calc(100vh-311px)] w-full items-center justify-center
    // lg:max-w-7xl md:max-w-screen-lg max-w-sm mx-auto
    <div className='lg:max-w-7xl md:max-w-screen-lg max-w-sm mx-auto'>
      <Header></Header>
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default AuthLogSign;
