import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import { useContext, useRef } from 'react';
import { LiaEyeSolid, LiaEyeSlashSolid } from 'react-icons/lia';
import { FcGoogle } from 'react-icons/fc';
import { RouterContext } from '../Provider/ReactContextProvider';
import { Link, useNavigate } from 'react-router-dom';
import { toast, Bounce } from 'react-toastify';
import { GoogleAuthProvider } from 'firebase/auth';

const Login = () => {
  const emailRef = useRef();
  const navigate = useNavigate();

  // Show toggle password
  const {
    showPassword,
    setShowPassword,
    logInUser,
    setUser,
    forgetMyPassword,
    logInWithPopUp,
  } = useContext(RouterContext);

  // Valid mail
  // const emailRef = useRef();

  const handleLogin = (e) => {
    e.preventDefault();

    const form = new FormData(e.target);
    const email = form.get('email');
    const password = form.get('password');
    // console.log(email, password)

    logInUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        if (user) {
          toast.success('Login Successfully!', {
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
        }
        // Navigate to homepage
        navigate('/');
      })
      .catch((error) => {
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // console.log(errorCode, errorMessage);
        toast.warn('Something Wrong!', {
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
      });
  };

  const provider = new GoogleAuthProvider();

  const handlePopUpLoginUser = () => {
    logInWithPopUp(provider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        if (user) {
          toast.success('Login Successfully!', {
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
        }
        // Navigate to homepage
        navigate('/');
      })
      .catch((error) => {
        /* const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage); */
        toast.warn('Something Wrong!', {
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
      });
  };

  const handleForgetPassword = () => {
    const email = emailRef.current.value;
    // console.log(forgetMail);
    if (!email) {
      toast.warn('Please Enter a Valid Mail!', {
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
    } else {
      forgetMyPassword(email)
        .then(() => {
          toast.info('Reset mail sent!', {
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
        })
        .catch(() => {
          toast.warn('Something Wrong!', {
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
        });
    }
  };

  return (
    <div className='md:flex md:flex-col md:items-center md:justify-center md:w-full md:h-screen md:mt-0 mt-5'>
      <form
        onSubmit={handleLogin}
        className='border rounded-md shadow-md p-5 flex lg:w-[25%] md:w-[40%] flex-col gap-4'
      >
        {/* Email */}
        <div>
          <div className='mb-2 block'>
            <Label htmlFor='email1' value='Your email' />
          </div>
          <TextInput
            id='email1'
            name='email'
            type='email'
            placeholder='Email'
            ref={emailRef}
            required
          />
        </div>

        {/* Password */}
        <div className='relative'>
          <div className='mb-2 block'>
            <Label htmlFor='password1' value='Password' />
          </div>
          <TextInput
            id='password1'
            name='password'
            type={showPassword ? 'text' : 'password'}
            placeholder='Password'
            required
          />
          <p
            onClick={() => setShowPassword(!showPassword)}
            className='absolute top-11 right-3 cursor-pointer'
          >
            {showPassword === true ? (
              <LiaEyeSlashSolid></LiaEyeSlashSolid>
            ) : (
              <LiaEyeSolid></LiaEyeSolid>
            )}
          </p>
        </div>

        {/* Remember ME */}
        <div className='flex items-center gap-2'>
          <Checkbox id='remember' />
          <Label htmlFor='remember'>Remember me</Label>
        </div>
        <Button type='submit' className='bg-[#E67E22] hover:bg-orange-300'>
          Login
        </Button>

        <small
          onClick={handleForgetPassword}
          className='text-gray-500 underline cursor-pointer'
        >
          Forget Password
        </small>

        <div className='flex items-center justify-between'>
          <p className='text-gray-500'>
            New User?{' '}
            <Link
              to='/auth/signup'
              className='text-cyan-500 font-semibold hover:underline cursor-pointer'
            >
              Sign Up
            </Link>
          </p>
          <div onClick={handlePopUpLoginUser}>
            <span className='block text-2xl cursor-pointer active:scale-95 transition-all'>
              <FcGoogle></FcGoogle>
            </span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
