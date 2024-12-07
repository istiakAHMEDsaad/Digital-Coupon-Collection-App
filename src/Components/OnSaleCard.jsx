import PropTypes from 'prop-types';

const OnSaleCard = ({ couponCard }) => {
  const { brand_logo, brand_name, coupons, category } = couponCard || {};

  //   console.log(coupons[0])

  return (
    <div className='flex flex-row items-center border md:w-[65%] mx-auto rounded-md cursor-pointer bg-slate-50 md:space-x-3'>
      <div>
        <img
          className='w-36 h-36 object-cover'
          src={brand_logo}
          alt={`${brand_name} image`}
        />
      </div>
      <div>
        <h2 className='font-semibold'>Brand Name: <span className='text-cyan-500'>{brand_name}</span></h2>
        <p className='font-semibold'>Total Coupon: <span className='text-cyan-500'>{coupons.length}</span></p>
        <p className='font-semibold'>Category: <span className='text-cyan-500'>{category}</span></p>
      </div>
    </div>
  );
};

OnSaleCard.propTypes = {
  couponCard: PropTypes.object.isRequired,
};

export default OnSaleCard;
