import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout';
import HomePage from '../Pages/HomePage';
import AuthLogSign from '../Pages/AuthLogSign';
import SignUp from '../Components/SignUp';
import ErrorPage from './error-page';
import Brands from '../Pages/Brands';
import BrandDetails from '../Components/BrandDetails';
import PrivateRoutes from './PrivateRoutes';
import MyProfile from '../Pages/MyProfile';
import Login from '../Components/Login';
import AboutMe from '../Pages/AboutMe';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <HomePage></HomePage>,
        loader: () => fetch('/coupon.json'),
      },
      {
        path: '/brands',
        element: <Brands></Brands>,
      },
      {
        path: '/brands/:_id',
        element: (
          <PrivateRoutes>
            <BrandDetails></BrandDetails>
          </PrivateRoutes>
        ),
      },
      {
        path: '/my_profile',
        element: (
          <PrivateRoutes>
            <MyProfile></MyProfile>
          </PrivateRoutes>
        ),
      },
      {
        path: '/about-dev',
        element: <AboutMe></AboutMe>,
      },
    ],
  },
  {
    path: '/auth',
    element: <AuthLogSign></AuthLogSign>,
    children: [
      {
        path: '/auth',
        element: <Login></Login>,
      },
      {
        path: '/auth/signup',
        element: <SignUp></SignUp>,
      },
    ],
  },

  /* {
    path: '/test',
    element: <ForgetPassValue></ForgetPassValue>,
  } */
]);

export default router;
