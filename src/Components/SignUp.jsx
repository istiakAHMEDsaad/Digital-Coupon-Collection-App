import { Button, Label, TextInput } from 'flowbite-react';
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { RouterContext } from '../Provider/ReactContextProvider';
import { LiaEyeSolid, LiaEyeSlashSolid } from 'react-icons/lia';
import { toast, Bounce } from 'react-toastify';
import { Helmet } from 'react-helmet-async';


const SignUp = () => {
  const navigate = useNavigate();
  const {
    showPassword,
    setShowPassword,
    createNewUserEmailPassword,
    setUser,
    profileNamePhoto,
  } = useContext(RouterContext);
  // const [showPassword, setShowPassword] = useState(false);

  /* const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/; */
  // Handle from submit
  const handleSignUp = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get('name');
    const email = form.get('email');
    const photo = form.get('photo');
    const password = form.get('password');
    const password2 = form.get('password2');
    const terms = e.target.terms.checked;
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    // console.log(name, email, photo, password);

    // Minimum Password Length 6

    if (!terms) {
      toast.info('Please agree to the terms and conditions!', {
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
      return;
    }

    if (password !== password2) {
      toast.error('Passwords do not match!', {
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
      return;
    }

    if (!passwordRegex.test(password)) {
      toast.error(
        'Password must be at least 8 characters long, include 1 uppercase, 1 lowercase, 1 number, and 1 special character',
        {
          position: 'top-center',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored',
          transition: Bounce,
        }
      );
      return;
    }

    // Handle Create User Function from Context Provider
    createNewUserEmailPassword(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        toast.success('Account Create Successfully!', {
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

        // Image and Name
        const profile = {
          displayName: name,
          photoURL: photo,
        };
        profileNamePhoto(profile)
          .then(() => {
            navigate('/');
          })
          .catch(() => {
            toast.error('Information not updated!', {
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
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        if (errorCode === 'auth/email-already-in-use') {
          toast.error('User Already Exist!', {
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
        } else if (password.length < 6) {
          toast.warn('Password Must Contain 6 Character!', {
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
        }
      });
  };

  return (
    <div className='md:flex md:flex-col md:items-center md:justify-center md:w-full md:h-screen mt-20'>
      <Helmet>
        <title>Digital Coupon Collection | Auth</title>
      </Helmet>
      <form
        onSubmit={handleSignUp}
        className='border p-5 rounded-md shadow-md flex max-w-md flex-col gap-4 lg:w-[30%] md:w-[40%]'
      >
        {/* Name */}
        <div>
          <div className='mb-2 block'>
            <Label htmlFor='name1' value='Your name' />
          </div>
          <TextInput
            id='name1'
            type='text'
            name='name'
            placeholder='Name'
            shadow
          />
        </div>

        {/* Email */}
        <div>
          <div className='mb-2 block'>
            <Label htmlFor='email2' value='Your email' />
          </div>
          <TextInput
            id='email2'
            type='email'
            name='email'
            placeholder='Email'
            required
            shadow
          />
        </div>

        {/* Photo */}
        <div>
          <div className='mb-2 block'>
            <Label htmlFor='photo1' value='Photo url' />
          </div>
          <TextInput
            id='photo1'
            type='url'
            name='photo'
            placeholder='Photo url'
            shadow
          />
        </div>

        {/* <div className='text-sm'>
          <p
            className={
              validations.hasUpperCase ? 'text-green-500' : 'text-red-500'
            }
          >
            1 Capital Letter
          </p>
          <p
            className={
              validations.hasLowerCase ? 'text-green-500' : 'text-red-500'
            }
          >
            1 Small Letter
          </p>
          <p
            className={
              validations.hasNumber ? 'text-green-500' : 'text-red-500'
            }
          >
            1 Number
          </p>
          <p
            className={
              validations.hasSpecialChar ? 'text-green-500' : 'text-red-500'
            }
          >
            1 Special Character (!@#$%^&*...)
          </p>
        </div> */}

        {/* Password */}
        <div className='relative'>
          <div className='mb-2 block'>
            <Label htmlFor='password2' value='Password' />
          </div>
          <TextInput
            id='password2'
            name='password'
            type={showPassword ? 'text' : 'password'}
            placeholder='Password'
            required
            shadow
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

        {/* Repeat Password */}
        <div className='relative'>
          <div className='mb-2 block'>
            <Label htmlFor='repeat-password' value='Repeat Password' />
          </div>
          <TextInput
            id='repeat-password'
            name='password2'
            type={showPassword ? 'text' : 'password'}
            placeholder='Repeat Password'
            required
            shadow
          />
          <p
            onClick={() => setShowPassword(!showPassword)}
            className='absolute top-11 right-3'
          >
            {showPassword === true ? (
              <LiaEyeSlashSolid></LiaEyeSlashSolid>
            ) : (
              <LiaEyeSolid></LiaEyeSolid>
            )}
          </p>
        </div>

        {/* Privacy and Policy */}
        <div className='flex items-center gap-2'>
          {/* <Checkbox id='agree' /> */}
          <input
            name='terms'
            type='checkbox'
            className='peer h-5 w-5 cursor-pointer transition-all appearance-none rounded border border-slate-300 checked:bg-slate-800 checked:border-slate-800'
          />
          <Label htmlFor='agree'>
            I agree with the&nbsp;
            <Link
              to={'google.com'}
              className='text-[#E67E22] hover:underline dark:text-cyan-500'
            >
              terms and conditions
            </Link>
          </Label>
        </div>
        <Button type='submit' className='bg-[#E67E22]'>
          Register new account
        </Button>

        <p>
          Already Have Account?{' '}
          <Link
            to='/auth'
            className='text-cyan-500 font-semibold hover:underline cursor-pointer'
          >
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignUp;

/**
 * saad@gmail.com, 123456
 * istiakahmedsaad@gmail.com, Saad@1234
 * Tatun@gmail.com, Tatun@1234, https://avatarfiles.alphacoders.com/364/thumb-1920-364538.png
 */
