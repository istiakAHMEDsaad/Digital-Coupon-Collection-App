import { Helmet } from 'react-helmet-async';
import brandReputation from '../assets/reputation.png';
import 'animate.css';
import { useContext, useState } from 'react';
import { RouterContext } from '../Provider/ReactContextProvider';
import BrandsCard from '../Components/BrandsCard';
import { Label, TextInput } from 'flowbite-react';
import { NavLink } from 'react-router-dom';

const Brands = () => {
  const { apiData } = useContext(RouterContext);
  const [search, setSearch] = useState("");

  const searchBrands = apiData.filter(brand => brand.brand_name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div>
      <Helmet>
        <title>Digital Coupon Collection | Brands</title>
      </Helmet>
      <h2 className='flex items-center gap-x-2 text-3xl justify-center font-semibold mb-10'>
        <span className='animate__animated animate__backInLeft'>
          Well Known Brand
        </span>
        <span>
          <img className='w-12' src={brandReputation} alt='logo' />
        </span>{' '}
      </h2>

      {/* Search Button */}
      <div className='mb-4'>
        <div className='mb-2 block'>
          <Label htmlFor='base' value='Search Brand' />
        </div>
        <TextInput onChange={(e)=>setSearch(e.target.value)} id='base' type='text' sizing='md' placeholder='Search' value={search} />
      </div>

      {/* Card */}
      <div className='space-y-5'>
        <NavLink to={'/'}>
          <button className='px-4 py-2 rounded-md bg-blue-600 text-white'>
            Back
          </button>
        </NavLink>
        {searchBrands.map((cards) => (
          <BrandsCard key={cards._id} cards={cards}></BrandsCard>
        ))}
      </div>
    </div>
  );
};

export default Brands;
