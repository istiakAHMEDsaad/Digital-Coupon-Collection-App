import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';


const MarqueeImage = ({ marqueeImg }) => {
  const { brand_logo} = marqueeImg || {};
  return (
    <NavLink to={'/brands'} className='mx-5 cursor-pointer border rounded-md shadow-md'>
      <img
        className='w-[10.6rem] h-[10.6rem] object-cover  hover:scale-95 transition-all'
        src={brand_logo}
        alt=''
      />
    </NavLink>
  );
};

MarqueeImage.propTypes = {
  marqueeImg: PropTypes.object.isRequired,
};

export default MarqueeImage;
