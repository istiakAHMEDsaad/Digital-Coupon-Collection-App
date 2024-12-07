import PropTypes from 'prop-types';
import { Card } from 'flowbite-react';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
// import { FaStar } from 'react-icons/fa';
import 'animate.css';
import { NavLink } from 'react-router-dom';

const BrandsCard = ({ cards }) => {
  const { _id, brand_logo, brand_name, rating, description, isSaleOn, coupons } =
    cards || {};
  // to={`/brands/${_id}`}
  const handleId = (_id) => {
    // console.log('clicked', _id);
  };
  return (
    // /brands

    <div className=''>
      <Card className='max-w-sm cursor-pointer' imgSrc={brand_logo} horizontal>
        {/* 1 */}
        <div className=''>
          <h5 className='text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
            {brand_name}
          </h5>
          <p className='flex items-center gap-1'>
            Ratings: <Rating className='max-w-28' value={rating} readOnly />
          </p>
        </div>
        <hr className='border-b w-full border-gray-300' />
        <p className='font-normal text-gray-700 dark:text-gray-400'>
          {description}
        </p>
        {coupons? <p className='text-gray-500'>Coupon count: {coupons.length}</p> : ''}
        <div className='flex items-center justify-between'>
          <NavLink
            to={`/brands/${_id}`}
            onClick={() => handleId(_id)}
            className='border px-4 py-2 rounded-[4px] text-white bg-blue-600 hover:bg-blue-500 active:scale-95 transition-all'
          >
            View Coupons
          </NavLink>
          {isSaleOn ? (
            <p className='animate__animated animate__flash animate__slow animate__infinite	infinite text-amber-500 italic'>
              Sale is On
            </p>
          ) : (
            ''
          )}
        </div>
      </Card>
    </div>
  );
};

BrandsCard.propTypes = {
  cards: PropTypes.object.isRequired,
};

export default BrandsCard;

// <Rating className='max-w-28' value={rating} readOnly />
// onClick={handleViewCoupons}
