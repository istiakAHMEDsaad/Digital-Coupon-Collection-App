import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div
      id='error-page'
      className='flex flex-col w-full h-screen items-center justify-center space-y-2'
    >
      <h1 className='lg:text-5xl md:text-4xl text-2xl font-bold text-center'>
        404 Page not found!
      </h1>
      <p className='text-center text-gray-500'>
        Sorry, an unexpected error has occurred.
      </p>
      <p className='text-red-600'>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
