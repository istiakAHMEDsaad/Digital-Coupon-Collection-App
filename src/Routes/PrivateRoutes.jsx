import { useContext } from 'react';
import { RouterContext } from '../Provider/ReactContextProvider';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import LoadingForUser from '../Components/LoadingForUser';


const PrivateRoutes = ({children}) => {
  const { user, loading } = useContext(RouterContext);
  
  if(loading){
    return <LoadingForUser></LoadingForUser>
  }

  if(user && user?.email){
    return children;
  }
  return <Navigate to='/auth'></Navigate>
};

PrivateRoutes.propTypes = {
    children: PropTypes.object.isRequired,
}

export default PrivateRoutes;
