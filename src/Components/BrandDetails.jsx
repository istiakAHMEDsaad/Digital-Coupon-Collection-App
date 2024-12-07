import { useContext, useEffect, useState } from 'react';
import { RouterContext } from '../Provider/ReactContextProvider';
import { NavLink, useParams } from 'react-router-dom';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import { Clipboard } from 'flowbite-react';
import { toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Button } from 'flowbite-react';
import { HiOutlineArrowRight } from 'react-icons/hi';

const BrandDetails = () => {
  const { apiData } = useContext(RouterContext);
  const brandId = useParams();
  const _id = brandId._id;


  const [findId, setFindId] = useState({});
  useEffect(() => {
    const brandDetailsId = apiData.find((brand) => brand._id === _id);
    setFindId(brandDetailsId);
  }, [apiData, _id]);

  const {
    brand_name,
    rating,
    description,
    brand_logo,
    shop_link,
    category,
    coupons,
  } = findId || {};

  const handleCopy = () => {
    toast.success('Copy to Clipboard!', {
      position: 'top-center',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
      transition: Bounce,
    });
  };


  return (
    <div>
      {/* Card */}
      <div className='mb-5'>
        <NavLink to='/brands'>
          <button className='px-4 py-2 rounded-md bg-blue-600 text-white mb-5'>
            Back
          </button>
        </NavLink>

        {/* card */}
        <div className='border p-2 rounded-md shadow-md flex flex-col md:flex-row items-center md:items-start gap-5'>
          {/* 1: Image */}
          <div className='basis-[15%]'>
            <img src={brand_logo} alt={`image ${brand_name}`} />
          </div>

          {/* 2: Details */}
          <div className='basis-[85%] flex flex-col gap-2'>
            <h2 className='text-3xl md:text-4xl'>{brand_name}</h2>

            <p className='flex items-center gap-1 text-2xl text-gray-500'>
              Ratings: <Rating className='max-w-28' value={rating} readOnly />
            </p>

            <p className='text-gray-500'>{description}</p>

            <p className='text-gray-500'>{category}</p>

            {coupons ? (
              <p className='text-gray-500'>Coupon: {coupons.length}</p>
            ) : (
              <p>No Coupon</p>
            )}
          </div>
        </div>
      </div>

      {/* Coupon */}
      <div className='flex flex-col md:flex-row gap-4'>
        {coupons ? (
          coupons.map((c_item, idx) => (
            <div key={idx}>
              <div className='border border-1 border-[#F39C12] space-y-1 p-2 rounded-md shadow-md'>
                {/* Coupon COde */}
                <h2 className='text-2xl font-semibold'>Coupon Code</h2>
                <div className='grid w-full max-w-[23rem] grid-cols-8 gap-2'>
                  <label htmlFor='CopyToClipboard' className='sr-only'>
                    Coupon Code
                  </label>
                  <input
                    type='text'
                    id='CopyToClipboard'
                    className='col-span-6 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-500 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-400 dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
                    value={c_item.coupon_code}
                    disabled
                    readOnly
                  />
                  <Clipboard
                    onClick={handleCopy}
                    valueToCopy={c_item.coupon_code}
                    label='Copy'
                  />
                </div>

                <h2 className='text-xl font-medium'>Description: </h2>
                <p className='text-gray-500 font-light text-lg'>
                  {c_item.description}
                </p>

                <h2 className='text-xl font-medium'>Expiry Date:</h2>
                <p className='text-gray-500 font-light text-lg'>
                  {c_item.expiry_date}
                </p>

                <h2 className='text-xl font-medium'>Condition:</h2>
                <p className='text-gray-500 font-light text-lg'>
                  {c_item.condition}
                </p>

                <h2 className='text-xl font-medium'>Coupon Type:</h2>
                <p className='text-gray-500 font-light text-lg'>
                  {c_item.coupon_type}
                </p>

                {/* Go Button */}
                <Button outline onClick={()=>window.open(shop_link, "_blank")}>
                  <span className='block'>Use Now</span>
                  <HiOutlineArrowRight className='h-6 w-6' />
                </Button>
              </div>
            </div>
          ))
        ) : (
          <p className='text-red-500'>404 Error</p>
        )}
      </div>
    </div>
  );
};

export default BrandDetails;
{
  /* {apiData.map((id) => (
          <Details key={id._id} id={id}></Details>
        ))} */
}

/*
<p className='text-2xl font-semibold'>
                  Coupon Code:{' '}
                  <span className='font-normal text-[#F39C12] italic'>{c_item.coupon_code}</span>
                </p>
*/
