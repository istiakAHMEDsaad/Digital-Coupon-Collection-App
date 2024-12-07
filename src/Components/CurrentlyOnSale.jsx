import PropTypes from 'prop-types';
import { MdOutlineLocalOffer } from 'react-icons/md';
import Marquee from 'react-fast-marquee';

const CurrentlyOnSale = ({ onSale }) => {
  const { isSaleOn, brand_logo, brand_name, coupons } = onSale || {};
  return (
    <div className='border rounded-md'>
      {isSaleOn ? (
        <div className='flex flex-col items-center justify-between'>
          <img
            className='w-[10.6rem] h-[10.6rem] object-cover'
            src={brand_logo}
            alt={`${brand_name} image`}
          />
          <small className='text-center block text-gray-500'>
            {brand_name}
          </small>
          <div className='bg-cyan-400 w-full py-2'>
            <p className='text-center italic text-slate-700 flex items-center justify-center gap-x-1'>Discount<MdOutlineLocalOffer></MdOutlineLocalOffer></p>
          </div>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

CurrentlyOnSale.propTypes = {
  onSale: PropTypes.object.isRequired,
};

export default CurrentlyOnSale;
