import { useContext, useEffect } from 'react';
import { RouterContext } from '../Provider/ReactContextProvider';
import 'animate.css';
import { Carousel, Table, Button, Timeline } from 'flowbite-react';
import Marquee from 'react-fast-marquee';
import MarqueeImage from '../Components/MarqueeImage';
import CurrentlyOnSale from '../Components/CurrentlyOnSale';
import { LiaFireAltSolid } from 'react-icons/lia';
import { RiCoupon3Line } from 'react-icons/ri';
import { HiArrowNarrowRight, HiCalendar } from 'react-icons/hi';
import { Helmet } from 'react-helmet-async';
import OnSaleCard from '../Components/OnSaleCard';
import Aos from 'aos';
import 'aos/dist/aos.css';

const HomePage = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  const { user, apiData } = useContext(RouterContext);
  // console.log(apiData);
  return (
    <div className='mt-4'>
      <Helmet>
        <title>Digital Coupon Collection | Home</title>
      </Helmet>
      {/* Welcome */}
      <div>
        {user?.displayName ? (
          <>
            <h2 className='animate__animated animate__backInDown lg:text-5xl font-semibold text-center'>
              Welcome
            </h2>
            <p className='text-center text-2xl text-cyan-500 animate__animated animate__slideInRight'>
              {user && user.displayName}
            </p>
          </>
        ) : (
          ''
        )}
      </div>

      {/* Carousel */}
      {
        <div className='h-56 sm:h-64 lg:h-96 mb-12'>
          <Carousel>
            <img
              className='md:scale-90 lg:scale-75'
              src='https://daraz.com/wp-content/uploads/2023/11/lADPGSWEsoa0HrTNBDjNB4A_1920_1080-1024x576.jpg'
              alt='...'
            />
            <img
              className='md:scale-90 lg:scale-75'
              src='https://storage.googleapis.com/pickaboo-prod/media/dcastalia_hybridslider/image/app_banner_3_copy.jpg'
              alt='...'
            />
            <img
              className='md:scale-90 lg:scale-75'
              src='https://storage.googleapis.com/pickaboo-prod/media/dcastalia_hybridslider/image/computer_essential_4_app_banner_copy_1_.jpg'
              alt='...'
            />
            <img
              className='md:scale-90 lg:scale-75'
              src='https://i.ytimg.com/vi/VzCS1Tn38nY/maxresdefault.jpg'
              alt='...'
            />
            <img
              src='https://techcloudltd.com/wp-content/uploads/2024/05/Khaasfood.com_-1024x404.webp'
              alt='...'
            />
          </Carousel>
        </div>
      }

      {/* Top Brand marquee */}
      <h2 className='text-2xl md:text-3xl text-center font-semibold text-slate-700 underline mb-5'>
        Top Brands
      </h2>
      {
        <Marquee pauseOnHover='true' autoFill='true'>
          <div className='flex mb-10'>
            {apiData.map((marqueeImg) => (
              <MarqueeImage
                key={marqueeImg._id}
                marqueeImg={marqueeImg}
              ></MarqueeImage>
            ))}
          </div>
        </Marquee>
      }

      {/* Brand Sell */}
      <h2 className='text-center font-semibold text-2xl md:text-3xl text-slate-700 flex items-center justify-center mb-5 animate__animated animate__pulse animate__infinite	infinite'>
        Brands on Sell{' '}
        <span className='text-3xl text-amber-700'>
          <LiaFireAltSolid></LiaFireAltSolid>
        </span>
      </h2>
      {/* Currently on sale */}
      <div className='flex flex-col md:flex-row mb-10 justify-center lg:gap-5 md:gap-y-0 gap-y-4'>
        {apiData.map((onSale) => (
          <CurrentlyOnSale key={onSale._id} onSale={onSale}></CurrentlyOnSale>
        ))}
      </div>

      {/* Showing Card */}
      <h2 className='font-semibold text-3xl text-center text-stone-500 flex justify-center items-center gap-1 mb-5'>
        Choose Your Coupon<RiCoupon3Line></RiCoupon3Line>
      </h2>
      <div className='flex flex-col gap-y-4 mb-10'>
        {apiData.map((couponCard) => (
          <OnSaleCard key={couponCard._id} couponCard={couponCard}></OnSaleCard>
        ))}
      </div>

      {/* Static Part 1 */}
      <div className='mb-10 space-y-4' data-aos='fade-right'>
        <h2 className='text-3xl md:text-4xl font-semibold text-center text-slate-700 underline'>
          Top Pick This Week
        </h2>
        <div className='overflow-x-auto'>
          <Table>
            <Table.Head>
              <Table.HeadCell>Product name</Table.HeadCell>
              <Table.HeadCell>Color</Table.HeadCell>
              <Table.HeadCell>Category</Table.HeadCell>
              <Table.HeadCell>Price</Table.HeadCell>
              <Table.HeadCell>
                <span className='sr-only'>Edit</span>
              </Table.HeadCell>
            </Table.Head>
            <Table.Body className='divide-y'>
              <Table.Row className='bg-white dark:border-gray-700 dark:bg-gray-800'>
                <Table.Cell className='whitespace-nowrap font-medium text-gray-900 dark:text-white'>
                  {'Apple MacBook Pro 17"'}
                </Table.Cell>
                <Table.Cell>Sliver</Table.Cell>
                <Table.Cell>Laptop</Table.Cell>
                <Table.Cell>$2999</Table.Cell>
                <Table.Cell>
                  <a
                    href='#'
                    className='font-medium text-cyan-600 hover:underline dark:text-cyan-500'
                  >
                    Edit
                  </a>
                </Table.Cell>
              </Table.Row>
              <Table.Row className='bg-white dark:border-gray-700 dark:bg-gray-800'>
                <Table.Cell className='whitespace-nowrap font-medium text-gray-900 dark:text-white'>
                  Microsoft Surface Pro
                </Table.Cell>
                <Table.Cell>White</Table.Cell>
                <Table.Cell>Laptop PC</Table.Cell>
                <Table.Cell>$1999</Table.Cell>
                <Table.Cell>
                  <a
                    href='#'
                    className='font-medium text-cyan-600 hover:underline dark:text-cyan-500'
                  >
                    Edit
                  </a>
                </Table.Cell>
              </Table.Row>
              <Table.Row className='bg-white dark:border-gray-700 dark:bg-gray-800'>
                <Table.Cell className='whitespace-nowrap font-medium text-gray-900 dark:text-white'>
                  Magic Mouse 2
                </Table.Cell>
                <Table.Cell>Black</Table.Cell>
                <Table.Cell>Accessories</Table.Cell>
                <Table.Cell>$99</Table.Cell>
                <Table.Cell>
                  <a
                    href='#'
                    className='font-medium text-cyan-600 hover:underline dark:text-cyan-500'
                  >
                    Edit
                  </a>
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </div>
      </div>

      {/* Static Part 2 */}
      <div data-aos='fade-left' className='space-y-5'>
        <h2 className='md:text-4xl text-3xl font-semibold text-center text-stone-700 italic'>
          Our Journey
        </h2>
        <div>
          <Timeline horizontal>
            <Timeline.Item>
              <Timeline.Point icon={HiCalendar} />
              <Timeline.Content>
                <Timeline.Time>February 2022</Timeline.Time>
                <Timeline.Title>
                  Create Our First Application
                </Timeline.Title>
                <Timeline.Body>
                  Get access to over 20+ pages including a dashboard layout,
                  charts, kanban board, calendar, and pre-order E-commerce &
                  Marketing pages.
                </Timeline.Body>
                <Button color='gray'>
                  Learn More
                  <HiArrowNarrowRight className='ml-2 h-3 w-3' />
                </Button>
              </Timeline.Content>
            </Timeline.Item>
            <Timeline.Item>
              <Timeline.Point icon={HiCalendar} />
              <Timeline.Content>
                <Timeline.Time>March 2023</Timeline.Time>
                <Timeline.Title>Marketing Our Site in Different Social Platform</Timeline.Title>
                <Timeline.Body>
                  All of the pages and components are first designed in Figma
                  and we keep a parity between the two versions even as we
                  update the project.
                </Timeline.Body>
              </Timeline.Content>
            </Timeline.Item>
            <Timeline.Item>
              <Timeline.Point icon={HiCalendar} />
              <Timeline.Content>
                <Timeline.Time>April 2024</Timeline.Time>
                <Timeline.Title>
                  Today We Stand As Top Coupon Collection Application
                </Timeline.Title>
                <Timeline.Body>
                  Get started with dozens of web components and interactive
                  elements built on top of Tailwind CSS.
                </Timeline.Body>
              </Timeline.Content>
            </Timeline.Item>
          </Timeline>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
